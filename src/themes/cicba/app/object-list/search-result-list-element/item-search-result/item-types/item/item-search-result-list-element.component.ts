import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listableObjectComponent } from '../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../../app/core/shared/view-mode.model';
import { ItemSearchResult } from '../../../../../../../../app/shared/object-collection/shared/item-search-result.model';
import { SearchResultListElementComponent } from '../../../../../../../../app/shared/object-list/search-result-list-element/search-result-list-element.component';
import { Item } from '../../../../../../../../app/core/shared/item.model';
import { getItemPageRoute } from '../../../../../../../../app/item-page/item-page-routing-paths';
import { Context } from 'src/app/core/shared/context.model';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { DSpaceObject } from 'src/app/core/shared/dspace-object.model';
import { ResourceType } from 'src/app/core/shared/resource-type';
import { getResourceTypeValueFor } from 'src/app/core/cache/object-cache.reducer';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement)
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement)

@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['./item-search-result-list-element.component.scss'],
  templateUrl: './item-search-result-list-element.component.html'
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
