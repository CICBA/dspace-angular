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
      },
      /* Aportar material */
      {
        id: `browse_global_aportar_material`,
        active: false,
        visible: true,
        index: 2,
        model: {
          type: MenuItemType.LINK,
          text: "Aportar Material",
          link: `/mydspace`
        } as LinkMenuItemModel
      },
      /* Más información */
      {
        id: `browse_global_mas_informacion`,
        active: false,
        visible: true,
        index: 3,
        model: {
          type: MenuItemType.TEXT,
          text: "Más información",
        } as TextMenuItemModel
      },
      /* Secciones de más información */
      {
        id: `browse_global_contacto`,
        parentID: 'browse_global_mas_informacion',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: "Contacto",
          link: `/#`
        } as LinkMenuItemModel
      },
      {
        id: `browse_global_que_es_cic_digital`,
        parentID: 'browse_global_mas_informacion',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: "¿Qué es CIC Digital?",
          link: `/#`
        } as LinkMenuItemModel
      },
      {
        id: `browse_global_politicas_repositorio`,
        parentID: 'browse_global_mas_informacion',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: "Políticas del repositorio",
          link: `/#`
        } as LinkMenuItemModel
      },
      {
        id: `browse_global_como_aportar_material`,
        parentID: 'browse_global_mas_informacion',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: "¿Cómo aportar material?",
          link: `/#`
        } as LinkMenuItemModel
      },
      {
        id: `browse_global_registro`,
        parentID: 'browse_global_mas_informacion',
        active: false,
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: "Registrarse",
          link: `/register`
        } as LinkMenuItemModel
      }
    ];
    menuList.forEach((menuSection) => this.menuService.addSection(this.menuID, Object.assign(menuSection, {
      shouldPersistOnRouteChange: true
    })));

  }
}
