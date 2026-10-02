import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SEARCH_CONFIG_SERVICE } from '../../../../../../app/my-dspace-page/my-dspace-configuration.service';
import { PageSizeSelectorComponent } from '../../../../../../app/shared/page-size-selector/page-size-selector.component';
import { SearchConfigurationService } from '../../../../../../app/shared/search/search-configuration.service';
import { SearchSettingsComponent as BaseComponent } from '../../../../../../app/shared/search/search-settings/search-settings.component';
import { CicSidebarDropdownComponent } from './cic-sidebar-dropdown.component';

@Component({
  selector: 'ds-search-settings',
  styleUrls: ['./search-settings.component.scss'],
  templateUrl: './search-settings.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService,
    },
  ],
  imports: [
    FormsModule,
    PageSizeSelectorComponent,
    CicSidebarDropdownComponent,
    TranslateModule,
  ],
})

/**
 * This component represents the part of the search sidebar that contains the general search settings.
 */
export class SearchSettingsComponent extends BaseComponent {

}
