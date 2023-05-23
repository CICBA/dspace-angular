import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { RootModule } from '../../app/root.module';
import { SearchModule } from '../../app/shared/search/search.module';
import { SharedModule } from '../../app/shared/shared.module';
import { FooterComponent } from './app/footer/footer.component';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { ItemSearchResultListElementComponent } from './app/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { ItemListElementComponent } from './app/object-list/item-list-element/item-types/item/item-list-element.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { PublicationComponent } from './app/item-page/simple/item-types/publication/publication.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { BadgeMetadataValuesComponent } from './app/item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { CicDateMetadataValuesComponent } from './app/item-page/simple/field-components/date-metadata-values/cic-date-metadata-values.component';
import { CicMetadataFieldWrapperComponent } from './app/item-page/simple/field-components/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { CicMetadataRepresentationListComponent } from './app/item-page/simple/field-components/metadata-representation-list/cic-metadata-representation-list.component';
import { CicMetadataValuesComponent } from './app/item-page/simple/field-components/metadata-values/cic-metadata-values.component';
import { CicSearchComponent } from './app/search/cic-search.component';
import { CicSearchSettingsComponent } from './app/search-settings/cic-search-settings.component';
import { CicSearchSidebarComponent } from './app/search-sidebar/cic-search-sidebar.component';
import { CicSidebarDropdownComponent } from './app/search-settings/cic-sidebar-dropdown.component';
import { LastAccessionedItemsComponent } from './app/home-page/last-accessioned-items/last-accessioned-items.component';
import { FileDownloadLinkComponent } from './app/shared/file-download-link/file-download-link.component';
import {
  CreateCollectionParentSelectorComponent
} from './app/shared/dso-selector/modal-wrappers/create-collection-parent-selector/create-collection-parent-selector.component';
import {
  CreateCommunityParentSelectorComponent
} from './app/shared/dso-selector/modal-wrappers/create-community-parent-selector/create-community-parent-selector.component';
import {
  CreateItemParentSelectorComponent
} from './app/shared/dso-selector/modal-wrappers/create-item-parent-selector/create-item-parent-selector.component';
import {
  EditCollectionSelectorComponent
} from './app/shared/dso-selector/modal-wrappers/edit-collection-selector/edit-collection-selector.component';
import {
  EditCommunitySelectorComponent
} from './app/shared/dso-selector/modal-wrappers/edit-community-selector/edit-community-selector.component';
import {
  EditItemSelectorComponent
} from './app/shared/dso-selector/modal-wrappers/edit-item-selector/edit-item-selector.component';
import { CollectionDropdownComponent } from './app/shared/collection-dropdown/collection-dropdown.component';
import { SearchNavbarComponent } from './app/search-navbar/search-navbar.component';
import { DsoPageModule } from '../../app/shared/dso-page/dso-page.module';

/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  PublicationComponent,
  UntypedItemComponent,
  ItemSearchResultListElementComponent,
  ItemListElementComponent,
  FileDownloadLinkComponent,
  CollectionDropdownComponent
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  FooterComponent,
  BadgeMetadataValuesComponent,
  CicDateMetadataValuesComponent,
  CicMetadataFieldWrapperComponent,
  CicMetadataRepresentationListComponent,
  CicMetadataValuesComponent,
  CicSearchComponent,
  CicSearchSettingsComponent,
  CicSearchSidebarComponent,
  CicSidebarDropdownComponent,
  LastAccessionedItemsComponent,
  CreateCollectionParentSelectorComponent,
  CreateCommunityParentSelectorComponent,
  CreateItemParentSelectorComponent,
  EditCollectionSelectorComponent,
  EditCommunitySelectorComponent,
  EditItemSelectorComponent,
  SearchNavbarComponent,
];

const EXPORTS = [
  BadgeMetadataValuesComponent,
  CicDateMetadataValuesComponent,
  CicMetadataFieldWrapperComponent,
  CicMetadataRepresentationListComponent,
  CicMetadataValuesComponent,
  CicSearchComponent,
  CicSearchSettingsComponent,
  CicSearchSidebarComponent,
  CicSidebarDropdownComponent,
  LastAccessionedItemsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    FormsModule,
    RootModule,
    NavbarModule,
    ItemPageModule,
    TranslateModule,
    DsoPageModule,
  ],
  declarations: DECLARATIONS,
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({ provide: component }))
  ],
  exports: [
    ...EXPORTS,
  ]
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class EagerThemeModule {
}
