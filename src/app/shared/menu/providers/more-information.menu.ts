import {
  Injectable,
} from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { TextMenuItemModel } from '../menu-item/models/text.model';
import { MenuItemType } from '../menu-item-type.model';
import { PartialMenuSection } from '../menu-provider.model';
import { AbstractExpandableMenuProvider } from './helper-providers/expandable-menu-provider';

/**
 * Menu provider to create the "All of DSpace" browse menu sections in the public navbar
 */
@Injectable()
export class MoreInformationMenuProvider extends AbstractExpandableMenuProvider {
  constructor(
  ) {
    super();
  }

  getTopSection(): Observable<PartialMenuSection> {
    return of(
      {
        model: {
          type: MenuItemType.TEXT,
          text: 'menu.section.navbar.more_information',
        } as TextMenuItemModel,
        visible: true,
      },
    );
  }

  /**
   * Retrieves subsections by fetching the browse definitions from the backend and mapping them to partial menu sections.
   */
  getSubSections(): Observable<PartialMenuSection[]> {
    const itemsMoreInformation = [
      { text: 'contact', route: 'feedback' },
      { text: 'what_is_cic_digital', route: 'que-es-cic-digital_es' },
      { text: 'repository_policy', route: 'politicas-del-repositorio_es' },
      { text: 'how_to_contribute', route: 'como-aportar-material_es' },
    ];

    return of(
      itemsMoreInformation.map((item) => {
        return {
          model: {
            type: MenuItemType.LINK,
            text: `menu.section.navbar.${item.text}`,
            link: `/page/${item.route}`,
          },
          visible: true,
        };
      }),
    );
  }
}