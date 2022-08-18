import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ComcolModule } from 'src/app/shared/comcol/comcol.module';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { RootModule } from '../../app/root.module';
import { SearchModule } from '../../app/shared/search/search.module';
import { SharedModule } from '../../app/shared/shared.module';
import { BrowseByMetadataPageComponent } from './app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';
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
import { CicCommunityPageSubCommunityListComponent } from './app/community-page/sub-community-list/community-page-sub-community-list.component';
import { CicDateMetadataValuesComponent } from './app/item-page/simple/field-components/date-metadata-values/cic-date-metadata-values.component';
import { CicMetadataFieldWrapperComponent } from './app/item-page/simple/field-components/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { CicMetadataRepresentationListComponent } from './app/item-page/simple/field-components/metadata-representation-list/cic-metadata-representation-list.component';
import { CicMetadataValuesComponent } from './app/item-page/simple/field-components/metadata-values/cic-metadata-values.component';
import { CicSearchComponent } from './app/search/cic-search.component';
import { CicSearchSettingsComponent } from './app/search-settings/cic-search-settings.component';
import { CicSearchSidebarComponent } from './app/search-sidebar/cic-search-sidebar.component';
import { CicSidebarDropdownComponent } from './app/search-settings/cic-sidebar-dropdown.component';
import { LastAccessionedItemsComponent } from './app/home-page/last-accessioned-items/last-accessioned-items.component';
import { CommunityPageComponent } from './app/community-page/community-page.component';
import { StatisticsModule } from 'src/app/statistics/statistics.module';
import { CommunityPageModule } from 'src/app/community-page/community-page.module';

/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  BrowseByMetadataPageComponent,
  ItemListElementComponent,
  ItemSearchResultListElementComponent,
  PublicationComponent,
  UntypedItemComponent,
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  BadgeMetadataValuesComponent,
  CicCommunityPageSubCommunityListComponent,
  CicDateMetadataValuesComponent,
  CicMetadataFieldWrapperComponent,
  CicMetadataRepresentationListComponent,
  CicMetadataValuesComponent,
  CicSearchComponent,
  CicSearchSettingsComponent,
  CicSearchSidebarComponent,
  CicSidebarDropdownComponent,
  CommunityPageComponent,
  FooterComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  HomeNewsComponent,
  LastAccessionedItemsComponent,
  NavbarComponent,
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
    ComcolModule,
    CommonModule,
    CommunityPageModule,
    FormsModule,
    RootModule,
    NavbarModule,
    ItemPageModule,
    SearchModule,
    SharedModule,
    StatisticsModule,
    TranslateModule,
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
