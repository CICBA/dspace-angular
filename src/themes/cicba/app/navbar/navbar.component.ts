import { Component } from '@angular/core';
import { MenuItemType } from 'src/app/shared/menu/initial-menus-state';
import { LinkMenuItemModel } from 'src/app/shared/menu/menu-item/models/link.model';
import { TextMenuItemModel } from 'src/app/shared/menu/menu-item/models/text.model';
import { environment } from 'src/environments/environment';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav]
})
export class NavbarComponent extends BaseComponent {

  /**
   * Initialize all menu sections and items for this menu
   */
  createMenu() {
    // Search for author Browse-By type from config to add it to the browse menu
    const authorType = environment.browseBy.types.find(elem => elem.id == 'author');
    const menuList: any[] = [
      /* Communities & Collections tree */
      {
        id: `browse_global_communities_and_collections`,
        active: false,
        visible: true,
        index: 0,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.browse_global_communities_and_collections`,
          link: `/community-list`
        } as LinkMenuItemModel
      },
      /* Authors */
      {
        id: `browse_global_by_${authorType.id}`,
        active: false,
        visible: true,
        index: 1,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.browse_global_by_${authorType.id}`,
          link: `/browse/${authorType.id}`
        } as LinkMenuItemModel
      }
    ];
    menuList.forEach((menuSection) => this.menuService.addSection(this.menuID, Object.assign(menuSection, {
      shouldPersistOnRouteChange: true
    })));

  }
}
