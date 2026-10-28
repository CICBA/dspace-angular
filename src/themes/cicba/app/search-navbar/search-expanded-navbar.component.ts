import { Component } from '@angular/core';
import { SearchNavbarComponent as BaseComponent } from '../../../../app/search-navbar/search-navbar.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { expandSearchInput } from '../../../../app/shared/animations/slide';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-search-expanded-navbar',
  templateUrl: './search-expanded-navbar.component.html',
  styleUrls: ['./search-expanded-navbar.component.scss'],
  animations: [expandSearchInput],
  imports: [
    TranslateModule,
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class SearchExpandedNavbarComponent extends BaseComponent {

  // Whether or not the search bar is expanded, boolean for html ngIf, string fo AngularAnimation state change
  searchExpanded = true;
  isExpanded = 'expanded';
}
