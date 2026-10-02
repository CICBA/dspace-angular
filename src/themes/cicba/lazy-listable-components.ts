import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { ItemListElementComponent } from './app/shared/object-list/item-list-element/item-types/item/item-list-element.component';
import { ItemSearchResultListElementComponent } from './app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';

/**
 * Add components that use the @listableObjectComponent decorator here.
 * This will ensure that the decorators get picked up when the app loads
 */
export const LISTABLE_COMPONENTS = [
  UntypedItemComponent,
  ItemListElementComponent,
  ItemSearchResultListElementComponent,
];
