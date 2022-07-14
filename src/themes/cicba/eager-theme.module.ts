import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../app/shared/shared.module';
import { SearchModule } from '../../app/shared/search/search.module';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { PublicationComponent } from './app/item-page/simple/item-types/publication/publication.component';
import { FooterComponent } from './app/footer/footer.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { ItemSearchResultListElementComponent } from './app/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { ItemListElementComponent } from './app/object-list/item-list-element/item-types/item/item-list-element.component';
import { BadgeMetadataValuesComponent } from './app/item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { CicMetadataFieldWrapperComponent } from './app/item-page/simple/field-components/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { CicMetadataRepresentationListComponent } from './app/item-page/simple/field-components/metadata-representation-list/cic-metadata-representation-list.component';
import { CicMetadataValuesComponent } from './app/item-page/simple/field-components/metadata-values/cic-metadata-values.component';
import { CicDateMetadataValuesComponent } from './app/item-page/simple/field-components/date-metadata-values/cic-date-metadata-values.component';

/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  PublicationComponent,
  UntypedItemComponent,
  ItemSearchResultListElementComponent,
  ItemListElementComponent
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  FooterComponent,
  BadgeMetadataValuesComponent,
  CicMetadataFieldWrapperComponent,
  CicMetadataRepresentationListComponent,
  CicMetadataValuesComponent,
  CicDateMetadataValuesComponent,
];

const EXPORTS = [
  BadgeMetadataValuesComponent,
  CicMetadataFieldWrapperComponent,
  CicMetadataRepresentationListComponent,
  CicMetadataValuesComponent,
  CicDateMetadataValuesComponent,
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
