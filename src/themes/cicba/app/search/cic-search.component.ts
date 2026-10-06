import { 
  AsyncPipe,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent as BaseComponent } from '../../../../app/shared/search/search.component';
import { expandSearchInput } from '../../../../app/shared/animations/slide';
import { PageWithSidebarComponent } from 'src/app/shared/sidebar/page-with-sidebar.component';
import { SearchSettingsComponent } from '../shared/search/search-settings/search-settings.component';
import { SearchResultsComponent } from 'src/app/shared/search/search-results/search-results.component';
import { CicSearchSidebarComponent } from 'src/themes/cicba/app/search-sidebar/cic-search-sidebar.component';
import { ThemedSearchFormComponent } from 'src/app/shared/search-form/themed-search-form.component';
import { SearchLabelsComponent } from 'src/app/shared/search/search-labels/search-labels.component';
import { ThemedSearchResultsComponent } from 'src/app/shared/search/search-results/themed-search-results.component';
/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-cic-search',
  templateUrl: 'cic-search.component.html',
  styleUrls: ['./cic-search.component.scss'],
  animations: [expandSearchInput],
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    PageWithSidebarComponent,
    SearchSettingsComponent,
    TranslateModule,
    SearchResultsComponent,
    CicSearchSidebarComponent,
    ThemedSearchFormComponent,
    SearchLabelsComponent,
    ThemedSearchResultsComponent,
  ],
})
export class CicSearchComponent extends BaseComponent {

}
