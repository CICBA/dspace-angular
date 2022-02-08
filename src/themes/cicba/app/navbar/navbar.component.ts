import { Component } from '@angular/core';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { RemoteData } from 'src/app/core/data/remote-data';
import { BrowseDefinition } from 'src/app/core/shared/browse-definition.model';
import { getFirstCompletedRemoteData } from 'src/app/core/shared/operators';
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
      /* Aportar material */
      {
        id: `navbar_menu_contribute_material`,
        active: false,
        visible: true,
        index: 2,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.contribute`,
          link: `/mydspace`
        } as LinkMenuItemModel
      },
      /* Más información */
      {
        id: `navbar_menu_more_information`,
        active: false,
        visible: true,
        index: 3,
        model: {
          type: MenuItemType.TEXT,
          text: `menu.section.navbar.more_information`,
        } as TextMenuItemModel
      },
      /* Secciones de más información */
      {
        id: `navbar_menu_contact`,
        parentID: 'navbar_menu_more_information',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.contact`,
          link: `/#`
        } as LinkMenuItemModel
      },
      {
        id: `navbar_menu_what_is_cic_digital`,
        parentID: 'navbar_menu_more_information',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.what_is_cic_digital`,
          link: `/page/que-es-cic-digital_es`
        } as LinkMenuItemModel
      },
      {
        id: `navbar_menu_repository_policy`,
        parentID: 'navbar_menu_more_information',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.repository_policy`,
          link: `/page/politicas-del-repositorio_es`
        } as LinkMenuItemModel
      },
      {
        id: `navbar_menu_how_to_contribute`,
        parentID: 'navbar_menu_more_information',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.how_to_contribute`,
          link: `/page/como-aportar-material_es`
        } as LinkMenuItemModel
      },
      {
        id: `navbar_menu_register`,
        parentID: 'navbar_menu_more_information',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: `menu.section.navbar.register`,
          link: `/register`
        } as LinkMenuItemModel
      }
    ];

    // Search for author Browse-By type from config to add it to the browse menu
    this.browseService.getBrowseDefinitions()
      .pipe(getFirstCompletedRemoteData<PaginatedList<BrowseDefinition>>())
      .subscribe((browseDefListRD: RemoteData<PaginatedList<BrowseDefinition>>) => {
        if (browseDefListRD.hasSucceeded) {
          const authorBrowseConfig = browseDefListRD.payload.page.filter((browseDef: BrowseDefinition) =>
            browseDef.id == 'author')
          if (authorBrowseConfig) {
            /* Authors */
            let authorType = authorBrowseConfig[0];
            menuList.push({
              id: `browse_global_by_${authorType.id}`,
              active: false,
              visible: true,
              index: 1,
              model: {
                type: MenuItemType.LINK,
                text: `menu.section.browse_global_by_${authorType.id}`,
                link: `/browse/${authorType.id}`
              } as LinkMenuItemModel
            })
          }
        }
      });

    menuList.forEach((menuSection) => this.menuService.addSection(this.menuID, Object.assign(menuSection, {
      shouldPersistOnRouteChange: true
    })));

  }
}
