import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScriptDataService } from '../../../core/data/processes/script-data.service';
import { getFirstCompletedRemoteData } from '../../../core/shared/operators';
import { map, switchMap, filter, startWith } from 'rxjs/operators';
import { FeatureID } from '../../../core/data/feature-authorization/feature-id';
import { AuthorizationDataService } from '../../../core/data/feature-authorization/authorization-data.service';
import { hasValue, isNotEmpty } from '../../empty.util';
import { RemoteData } from '../../../core/data/remote-data';
import { Process } from '../../../process-page/processes/process.model';
import { getProcessDetailRoute } from '../../../process-page/process-page-routing.paths';
import { NotificationsService } from '../../notifications/notifications.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { PaginatedSearchOptions } from '../models/paginated-search-options.model';
import { SearchFilter } from '../models/search-filter.model';

@Component({
  selector: 'ds-search-export-csv',
  styleUrls: ['./search-export-csv.component.scss'],
  templateUrl: './search-export-csv.component.html',
})
/**
 * Display a button to export the current search results as csv
 */
export class SearchExportCsvComponent implements OnInit {

  /**
   * The current configuration of the search
   */
  @Input() searchConfig: PaginatedSearchOptions;

  /**
   * Observable used to determine whether the button should be shown
   */
  shouldShowButton$: Observable<boolean>;

  /**
   * The message key used for the tooltip of the button
   */
  tooltipMsg = 'metadata-export-search.tooltip';

  constructor(private scriptDataService: ScriptDataService,
              private authorizationDataService: AuthorizationDataService,
              private notificationsService: NotificationsService,
              private translateService: TranslateService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.shouldShowButton$ = this.authorizationDataService.isAuthorized(FeatureID.AdministratorOf).pipe(
      filter((isAuthorized: boolean) => isAuthorized),
      switchMap(() => this.scriptDataService.scriptWithNameExistsAndCanExecute('metadata-export-search')),
      map((canExecute: boolean) => canExecute),
      startWith(false),
    );
  }

  /**
   * Start the export of the items based on the current search configuration
   */
  export() {
    const parameters = [];
    if (hasValue(this.searchConfig)) {
      if (isNotEmpty(this.searchConfig.query)) {
        parameters.push({name: '-q', value: this.searchConfig.query});
      }
      if (isNotEmpty(this.searchConfig.scope)) {
        parameters.push({name: '-s', value: this.searchConfig.scope});
      }
      if (isNotEmpty(this.searchConfig.configuration)) {
        parameters.push({name: '-c', value: this.searchConfig.configuration});
      }
      if (isNotEmpty(this.searchConfig.filters)) {
        this.searchConfig.filters.forEach((searchFilter: SearchFilter) => {
          if (hasValue(searchFilter.values)) {
            searchFilter.values.forEach((value: string) => {
              let operator;
              let filterValue;
              if (hasValue(searchFilter.operator)) {
                operator = searchFilter.operator;
                filterValue = value;
              } else {
                operator = value.substring(value.lastIndexOf(',') + 1);
                filterValue = value.substring(0, value.lastIndexOf(','));
              }
              const valueToAdd = `${searchFilter.key.substring(2)},${operator}=${filterValue}`;
              parameters.push({name: '-f', value: valueToAdd});
            });
          }
        });
      }
      if (isNotEmpty(this.searchConfig.fixedFilter)) {
        const fixedFilter = this.searchConfig.fixedFilter.substring(2);
        const keyAndValue = fixedFilter.split('=');
        if (keyAndValue.length > 1) {
          const key = keyAndValue[0];
          const valueAndOperator = keyAndValue[1].split(',');
          if (valueAndOperator.length > 1) {
            const value = valueAndOperator[0];
            const operator = valueAndOperator[1];
            parameters.push({name: '-f', value: `${key},${operator}=${value}`});
          }
        }
      }
    }

    this.scriptDataService.invoke('metadata-export-search', parameters, []).pipe(
      getFirstCompletedRemoteData()
    ).subscribe((rd: RemoteData<Process>) => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('metadata-export-search.submit.success'));
        this.router.navigateByUrl(getProcessDetailRoute(rd.payload.processId));
      } else {
        this.notificationsService.error(this.translateService.get('metadata-export-search.submit.error'));
      }
    });
  }
}
