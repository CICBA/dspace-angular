import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { RemoteData } from '../../../../../app/core/data/remote-data';
import { PaginatedList } from '../../../../../app/core/data/paginated-list.model';
import { PaginationComponentOptions } from '@dspace/core/pagination/pagination-component-options.model';
import { SortDirection, SortOptions } from '../../../../../app/core/cache/models/sort-options.model';
import { fadeIn, fadeInOut } from '../../../../../app/shared/animations/fade';
import { BehaviorSubject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { SearchService } from 'src/app/shared/search/search.service';
import { followLink } from '@dspace/core/shared/follow-link-config.model';
import { Item } from 'src/app/core/shared/item.model';
import { getFirstSucceededRemoteData } from 'src/app/core/shared/operators';
import { SearchConfigurationService } from 'src/app/shared/search/search-configuration.service';
import { DSpaceObject } from 'src/app/core/shared/dspace-object.model';
import { hasValue } from '@dspace/shared/utils/empty.util';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { SearchResult } from 'src/app/core/shared/search/models/search-result.model';
import { PaginatedSearchOptions } from '@dspace/core/shared/search/models/paginated-search-options.model';
import { ListableObjectComponentLoaderComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object-component-loader.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';

@Component({
  selector: 'ds-last-accessioned-items',
  styleUrls: ['./last-accessioned-items.component.scss'],
  templateUrl: './last-accessioned-items.component.html',
  animations: [
    fadeIn,
    fadeInOut,
  ],
  imports: [
    TranslateModule,
    RouterLink,
    AsyncPipe,
    ListableObjectComponentLoaderComponent,
    ThemedLoadingComponent,
    ErrorComponent,
    VarDirective,
  ]
})
/**
 * Component to display a list of the first 5 items ordered by last accessioned date
 */
export class LastAccessionedItemsComponent implements OnInit {
  /**
   * The i18n message to display as title
   */
  title = 'last.accessioned.items.title';

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

  /**
   * The view mode of the this component
   */
  viewMode = ViewMode.ListElement;

  public constructor(protected searchService: SearchService,
    protected searchConfigService: SearchConfigurationService,
    protected paginationService: PaginationService,
  ) {

  }

  ngOnInit(): void {
    this.searchLastAccessionedItems();
    this.setSearchRedirectConfig();
  }

  /**
   * Search for last accessioned items in DESC order using searchService
   */
  private searchLastAccessionedItems() {
    this.sortOptions = new SortOptions('dc.date.accessioned', SortDirection.DESC);
    const searchOptions = new PaginatedSearchOptions(
      {
        pagination: this.paginationConfig,
        sort: this.sortOptions
      }
    );
    this.subsc = this.searchService.search(
      searchOptions, undefined, true, true, followLink<Item>('thumbnail', { isOptional: true })
    ).pipe(getFirstSucceededRemoteData(), startWith(undefined)
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
   * Set searching config when redirecting to search page in "see more" anchor
   */
  private setSearchRedirectConfig(): void {
    this.searchLink = this.getSearchLink();
    const sortField = this.searchConfigService.paginationID + '.sf';
    const sortDirection = this.searchConfigService.paginationID + '.sd';
    const page = this.searchConfigService.paginationID + '.page';
    this.addQueryParams = {
      [sortField]: 'dc.date.accessioned',
      [sortDirection]: SortDirection.DESC,
      [page]: 1
    };
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
