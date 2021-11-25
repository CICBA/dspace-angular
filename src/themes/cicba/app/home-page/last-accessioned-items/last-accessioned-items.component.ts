import { Component, OnInit } from '@angular/core';
import { RemoteData } from '../../../../../app/core/data/remote-data';
import { PaginatedList } from '../../../../../app/core/data/paginated-list.model';
import { PaginationComponentOptions } from '../../../../../app/shared/pagination/pagination-component-options.model';
import { SortDirection, SortOptions } from '../../../../../app/core/cache/models/sort-options.model';
import { fadeIn, fadeInOut } from '../../../../../app/shared/animations/fade';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { SearchService } from 'src/app/core/shared/search/search.service';
import { followLink } from 'src/app/shared/utils/follow-link-config.model';
import { Item } from 'src/app/core/shared/item.model';
import { getFirstSucceededRemoteData } from 'src/app/core/shared/operators';
import { PaginatedSearchOptions } from 'src/app/shared/search/paginated-search-options.model';
import { SearchConfigurationService } from 'src/app/core/shared/search/search-configuration.service';
import { ListableObject } from 'src/app/shared/object-collection/shared/listable-object.model';
import { SearchResult } from 'src/app/shared/search/search-result.model';
import { DSpaceObject } from 'src/app/core/shared/dspace-object.model';
import { hasValue } from 'src/app/shared/empty.util';
import { currentPath } from 'src/app/shared/utils/route.utils';

@Component({
  selector: 'ds-last-accessioned-items',
  styleUrls: ['./last-accessioned-items.component.scss'],
  templateUrl: './last-accessioned-items.component.html',
  animations: [
    fadeIn,
    fadeInOut
  ]
})
/**
 * Component to display a browse-by page for any ListableObject
 */
export class LastAccessionedItemsComponent implements OnInit {
  /**
   * The i18n message to display as title
   */
  title: string = "last.accessioned.items.title";

  /**
   * The list of objects to display
   */
  objects$: BehaviorSubject<RemoteData<PaginatedList<SearchResult<DSpaceObject>>>> = new BehaviorSubject(null);

  /**
   * The pagination config used to display the values
   */
  paginationConfig: PaginationComponentOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'bbm',
    currentPage: 1,
    pageSize: 5
  });

  /**
 * Subscription to unsubscribe from
 */
  subsc: Subscription;

  /**
 * Link to the search page
 */
  searchLink: string;

  /**
   * UI parameters when this filter is added
   */
  addQueryParams;

  sortOptions: SortOptions;

  public constructor(protected searchService: SearchService,
    protected searchConfigService: SearchConfigurationService,
    protected paginationService: PaginationService,
  ) {

  }

  ngOnInit(): void {
    this.searchLink = this.getSearchLink();
    const page = this.paginationService.getPageParam(this.searchConfigService.paginationID);
    this.addQueryParams = {
      "spc.sf": "dc.date.accessioned",
      "spc.sd": "DESC",
      page: 1
    };
    this.sortOptions = new SortOptions('dc.date.accessioned', SortDirection.DESC);
    const searchOptions$: Observable<PaginatedSearchOptions> = this.searchConfigService.paginatedSearchOptions;
    this.subsc = searchOptions$.pipe(
      switchMap((options) => {
        options.pagination = this.paginationConfig;
        options.sort = this.sortOptions;
        return this.searchService.search(
          options, undefined, true, true, followLink<Item>('thumbnail', { isOptional: true })
        ).pipe(getFirstSucceededRemoteData(), startWith(undefined))
      })
    ).subscribe((results) => {
      this.objects$.next(results);
    });
  }

  /**
   * @returns {string} The base path to the search page
   */
  private getSearchLink(): string {
    return this.searchService.getSearchLink();
  }

  /**
  * Unsubscribe from the subscription
 */
  ngOnDestroy(): void {
    if (hasValue(this.subsc)) {
      this.subsc.unsubscribe();
    }
  }

}
