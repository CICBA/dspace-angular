import { Context } from '@dspace/core/shared/context.model';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { listableObjectComponent } from '../../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../../../app/core/shared/view-mode.model';
import { ItemSearchResult } from '@dspace/core/shared/object-collection/item-search-result.model';
import { SearchResultListElementComponent } from '../../../../../../../../../app/shared/object-list/search-result-list-element/search-result-list-element.component';
import { Item } from '../../../../../../../../../app/core/shared/item.model';
import { getItemPageRoute } from '@dspace/core/router/utils/dso-route.utils';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { DSpaceObject } from 'src/app/core/shared/dspace-object.model';
import { BadgeMetadataValuesComponent } from 'src/themes/cicba/app/item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { ThemedAccessStatusBadgeComponent } from 'src/app/shared/object-collection/shared/badges/access-status-badge/themed-access-status-badge.component';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { ThemedTypeBadgeComponent } from 'src/app/shared/object-collection/shared/badges/type-badge/themed-type-badge.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { MetadataDirective } from 'src/app/shared/metadata.directive';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.Any, 'cicba')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.Any, 'cicba')

@Component({
  selector: 'ds-cic-item-search-result-list-element',
  styleUrls: ['./item-search-result-list-element.component.scss'],
  templateUrl: './item-search-result-list-element.component.html',
  imports: [
    NgClass,
    RouterLink,
    BadgeMetadataValuesComponent,
    ThemedAccessStatusBadgeComponent,
    ThemedBadgesComponent,
    ThemedTypeBadgeComponent,
    TruncatableComponent,
    TruncatablePartComponent,
    MetadataDirective,
  ],
})
/**
 * The component for displaying a list element for an item search result of the type Publication
 */
export class ItemSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  router: string;

  public constructor(
    truncatableService: TruncatableService,
    dsoNameService: DSONameService,
    private _router: Router,
  ) {
    super(truncatableService, dsoNameService);
    this.router = _router.url;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.itemPageRoute = getItemPageRoute(this.dso);
  }

  getDsoType(object: DSpaceObject): any {
    return object.type;
  }

}
