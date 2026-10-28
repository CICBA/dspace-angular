import { Component } from '@angular/core';
import { SearchSidebarComponent as BaseComponent } from '../../../../app/shared/search/search-sidebar/search-sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { expandSearchInput } from '../../../../app/shared/animations/slide';
import { ThemedSearchFiltersComponent } from 'src/app/shared/search/search-filters/themed-search-filters.component';
import { SearchSwitchConfigurationComponent } from 'src/app/shared/search/search-switch-configuration/search-switch-configuration.component';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-cic-search-sidebar',
  templateUrl: 'cic-search-sidebar.component.html',
  styleUrls: ['./cic-search-sidebar.component.scss'],
  animations: [expandSearchInput],
  imports: [
    ThemedSearchFiltersComponent,
    SearchSwitchConfigurationComponent,
    TranslateModule,
  ],
})
export class CicSearchSidebarComponent extends BaseComponent {

}
