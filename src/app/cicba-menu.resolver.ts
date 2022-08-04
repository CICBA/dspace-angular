import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuID } from './shared/menu/menu-id.model';
import { MenuItemType } from './shared/menu/menu-item-type.model';
import { LinkMenuItemModel } from './shared/menu/menu-item/models/link.model';
import { getFirstCompletedRemoteData } from './core/shared/operators';
import { PaginatedList } from './core/data/paginated-list.model';
import { BrowseDefinition } from './core/shared/browse-definition.model';
import { RemoteData } from './core/data/remote-data';
import { TextMenuItemModel } from './shared/menu/menu-item/models/text.model';
import { BrowseService } from './core/browse/browse.service';
import { MenuService } from './shared/menu/menu.service';
import { AuthorizationDataService } from './core/data/feature-authorization/authorization-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ScriptDataService
} from './core/data/processes/script-data.service';
import { MenuResolver } from './menu.resolver';

/**
 * Creates all of the app's menus
 */
@Injectable({
  providedIn: 'root'
})
export class CICBAMenuResolver extends MenuResolver {

  router: string;

  constructor(
    private _router: Router,
    protected menuService: MenuService,
    protected browseService: BrowseService,
    protected authorizationService: AuthorizationDataService,
    protected modalService: NgbModal,
    protected scriptDataService: ScriptDataService,
  ) {
    super(menuService, browseService, authorizationService, modalService, scriptDataService);
    this.router = _router.url;
  }


  /**
   * Initialize all menu sections and items for {@link MenuID.PUBLIC}
   */
  createPublicMenu$(): Observable<boolean> {
    let menuList: any[] = [];
    if (this.router !== '/home') {
      menuList = [
        /* Explorar */
        {
          id: `navbar_explore`,
          active: false,
          visible: true,
          index: 0,
          model: {
            type: MenuItemType.TEXT,
            text: `menu.section.navbar.explore`,
          } as TextMenuItemModel
        },
        /* Communities & Collections tree */
        {
          id: `browse_global_communities_and_collections`,
          parentID: 'navbar_explore',
          active: false,
          visible: true,
          model: {
            type: MenuItemType.LINK,
            text: `menu.section.browse_global_communities_and_collections`,
            link: `/community-list`
          } as LinkMenuItemModel
        },
        /* Más información */
        {
          id: `navbar_menu_more_information`,
          active: false,
          visible: true,
          index: 1,
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
            link: `/page/feedback`
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
      ];
      // Search for author Browse-By type from config to add it to the browse menu
      this.browseService.getBrowseDefinitions()
      .pipe(getFirstCompletedRemoteData<PaginatedList<BrowseDefinition>>())
      .subscribe((browseDefListRD: RemoteData<PaginatedList<BrowseDefinition>>) => {
        if (browseDefListRD.hasSucceeded) {
          const authorBrowseConfig = browseDefListRD.payload.page.filter((browseDef: BrowseDefinition) =>
            browseDef.id === 'author');
          if (authorBrowseConfig) {
            /* Authors */
            const authorType = authorBrowseConfig[0];
            menuList.push({
              id: `browse_global_by_${authorType.id}`,
              parentID: 'navbar_explore',
              active: false,
              visible: true,
              model: {
                type: MenuItemType.LINK,
                text: `menu.section.browse_global_by_${authorType.id}`,
                link: `/browse/${authorType.id}`
              } as LinkMenuItemModel
            });
          }
        }
        menuList.forEach((menuSection) => this.menuService.addSection(MenuID.PUBLIC, Object.assign(menuSection, {
          shouldPersistOnRouteChange: true
        })));
      });
      return this.waitForMenu$(MenuID.PUBLIC);
    }
  }
}
