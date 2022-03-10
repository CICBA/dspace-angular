import { Component } from '@angular/core';
import { SearchSidebarComponent as BaseComponent } from '../../../../app/shared/search/search-sidebar/search-sidebar.component';
import { expandSearchInput } from '../../../../app/shared/animations/slide';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-themed-search-sidebar',
  templateUrl: 'themed-search-sidebar.component.html',
  styleUrls: ['../../../../app/shared/search/search.component.scss'],
  animations: [expandSearchInput]
})
export class ThemedSearchSidebarComponent extends BaseComponent {

}
