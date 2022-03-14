import { Component } from '@angular/core';
import { SearchSidebarComponent as BaseComponent } from '../../../../app/shared/search/search-sidebar/search-sidebar.component';
import { expandSearchInput } from '../../../../app/shared/animations/slide';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-cic-search-sidebar',
  templateUrl: 'cic-search-sidebar.component.html',
  styleUrls: ['./cic-search-sidebar.component.scss'],
  animations: [expandSearchInput]
})
export class CicSearchSidebarComponent extends BaseComponent {

}
