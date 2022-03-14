import { Component } from '@angular/core';
import { SearchComponent as BaseComponent } from '../../../../app/shared/search/search.component';
import { expandSearchInput } from '../../../../app/shared/animations/slide';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-cic-search',
  templateUrl: 'cic-search.component.html',
  styleUrls: ['./cic-search.component.scss'],
  animations: [expandSearchInput]
})
export class CicSearchComponent extends BaseComponent {

}
