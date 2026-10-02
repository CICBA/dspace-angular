import { Component } from '@angular/core';
import { SidebarDropdownComponent as BaseComponent } from '../../../../../../app/shared/sidebar/sidebar-dropdown.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-cic-sidebar-dropdown',
  styleUrls: ['./cic-sidebar-dropdown.component.scss'],
  templateUrl: './cic-sidebar-dropdown.component.html',
  imports: [
    TranslateModule,
  ],
})
/**
 * This components renders a sidebar dropdown including the label.
 * The options should still be provided in the content.
 */
export class CicSidebarDropdownComponent extends BaseComponent {
}
