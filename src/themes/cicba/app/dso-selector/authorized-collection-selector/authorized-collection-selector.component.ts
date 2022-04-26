import { Component } from '@angular/core';
import { AuthorizedCollectionSelectorComponent as BaseComponent } from '../../../../../app/shared/dso-selector/dso-selector/authorized-collection-selector/authorized-collection-selector.component';

@Component({
    selector: 'ds-authorized-collection-selector',
    styleUrls: ['../../../../../app/shared/dso-selector/dso-selector/dso-selector.component.scss'],
    templateUrl: 'dso-selector.component.html'
  })

/**
 * Component rendering a list of collections to select from
 */
export class AuthorizedCollectionSelectorComponent extends BaseComponent {
    ngOnInit(): void {
        super.ngOnInit();
        this.defaultPagination.pageSize = 50;
      }
    
}