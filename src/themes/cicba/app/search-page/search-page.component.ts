import { Component } from '@angular/core';
import { SearchConfigurationService } from 'src/app/core/shared/search/search-configuration.service';
import { SEARCH_CONFIG_SERVICE } from 'src/app/my-dspace-page/my-dspace-page.component';
import { SearchPageComponent as BaseComponent } from '../../../../app/search-page/search-page.component';

@Component({
  selector: 'ds-search-page',
  // styleUrls: ['./search-page.component.scss'],
  templateUrl: './search-page.component.html',
  // templateUrl: '../../../../app/search-page/search-page.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService
    }
  ]
})

/**
 * This component represents the whole search page
 * It renders search results depending on the current search options
 */
export class SearchPageComponent extends BaseComponent {}

