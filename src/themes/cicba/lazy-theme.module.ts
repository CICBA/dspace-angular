import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegistriesModule } from '../../app/admin/admin-registries/admin-registries.module';
import { AdminSearchModule } from '../../app/admin/admin-search-page/admin-search.module';
import { AdminWorkflowModuleModule } from '../../app/admin/admin-workflow-page/admin-workflow.module';
import { BitstreamFormatsModule } from '../../app/admin/admin-registries/bitstream-formats/bitstream-formats.module';
import { BrowseByModule } from '../../app/browse-by/browse-by.module';
import { CollectionFormModule } from '../../app/collection-page/collection-form/collection-form.module';
import { CommunityFormModule } from '../../app/community-page/community-form/community-form.module';
import { CoreModule } from '../../app/core/core.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditItemPageModule } from '../../app/item-page/edit-item-page/edit-item-page.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdlePreloadModule } from 'angular-idle-preload';
import { JournalEntitiesModule } from '../../app/entity-groups/journal-entities/journal-entities.module';
import { MyDspaceSearchModule } from '../../app/my-dspace-page/my-dspace-search.module';
import { MenuModule } from '../../app/shared/menu/menu.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageModule } from '../../app/profile-page/profile-page.module';
import { RegisterEmailFormModule } from '../../app/register-email-form/register-email-form.module';
import { ResearchEntitiesModule } from '../../app/entity-groups/research-entities/research-entities.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SearchPageModule } from '../../app/search-page/search-page.module';
import { SharedModule } from '../../app/shared/shared.module';
import { StatisticsModule } from '../../app/statistics/statistics.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageModule } from '../../app/home-page/home-page.module';
import { AppModule } from '../../app/app.module';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { RouterModule } from '@angular/router';
import { CommunityListPageModule } from '../../app/community-list-page/community-list-page.module';
import { InfoModule } from '../../app/info/info.module';
import { StatisticsPageModule } from '../../app/statistics-page/statistics-page.module';
import { CommunityPageModule } from '../../app/community-page/community-page.module';
import { CollectionPageModule } from '../../app/collection-page/collection-page.module';
import { SubmissionModule } from '../../app/submission/submission.module';
import { MyDSpacePageModule } from '../../app/my-dspace-page/my-dspace-page.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { ResourcePoliciesModule } from 'src/app/shared/resource-policies/resource-policies.module';
import { ComcolModule } from 'src/app/shared/comcol/comcol.module';
import { RootModule } from 'src/app/root.module';
import { EagerThemeModule } from './eager-theme.module';
import { FileSectionComponent } from './app/item-page/simple/field-components/file-section/file-section.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { BrowseBySwitcherComponent } from './app/browse-by/browse-by-switcher/browse-by-switcher.component';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { ConfigurationSearchPageComponent } from './app/search-page/configuration-search-page.component';
import { EndUserAgreementComponent } from './app/info/end-user-agreement/end-user-agreement.component';
import { CollectionStatisticsPageComponent } from './app/statistics-page/collection-statistics-page/collection-statistics-page.component';
import { CommunityStatisticsPageComponent } from './app/statistics-page/community-statistics-page/community-statistics-page.component';
import { ItemStatisticsPageComponent } from './app/statistics-page/item-statistics-page/item-statistics-page.component';
import { SiteStatisticsPageComponent } from './app/statistics-page/site-statistics-page/site-statistics-page.component';
import { CommunityPageComponent } from './app/community-page/community-page.component';
import { CollectionPageComponent } from './app/collection-page/collection-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { LogoutPageComponent } from './app/logout-page/logout-page.component';
import { SubmissionEditComponent } from './app/submission/edit/submission-edit.component';
import { SubmissionImportExternalComponent } from './app/submission/import-external/submission-import-external.component';
import { SubmissionSubmitComponent } from './app/submission/submit/submission-submit.component';
import { WorkflowItemDeleteComponent } from './app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component';
import { WorkflowItemSendBackComponent } from './app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component';
import { BreadcrumbsComponent } from './app/breadcrumbs/breadcrumbs.component';
import { CommunityPageSubCommunityListComponent } from './app/community-page/sub-community-list/community-page-sub-community-list.component';
import { CicDigitalInfoComponent } from './app/info/cic-digital-info/cic-digital-info.component';
import { HowToContributeComponent } from './app/info/how-to-contribute/how-to-contribute.component';
import { ItemPageStatisticsComponent } from './app/item-page/simple/statistics/item-page-statistics.component';
import { RepositoryPolicyComponent } from './app/info/repository-policy/repository-policy.component';
import { SearchExpandedNavbarComponent } from './app/search-navbar/search-expanded-navbar.component';
import { SearchSettingsComponent } from './app/shared/search/search-settings/search-settings.component';
import { SearchResultsComponent } from './app/shared/search/search-results/search-results.component';
import { ResultsBackButtonComponent } from './app/shared/results-back-button/results-back-button.component';
import { ResultsBackButtonModule } from '../../app/shared/results-back-button/results-back-button.module';
import { ObjectListComponent } from './app/shared/object-list/object-list.component';
import { LoadingComponent } from './app/shared/loading/loading.component';
import {
  ExternalSourceEntryImportModalComponent
} from './app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/external-source-entry-import-modal/external-source-entry-import-modal.component';
import { ComcolPageBrowseByComponent } from './app/shared/comcol-page-browse-by/comcol-page-browse-by.component';
import { AuthNavMenuComponent } from './app/shared/auth-nav-menu/auth-nav-menu.component';
import { DsoSharedModule } from '../../app/dso-shared/dso-shared.module';
import {
  CommunityPageSubCollectionListComponent
} from './app/community-page/sub-collection-list/community-page-sub-collection-list.component';
import { DsoPageModule } from '../../app/shared/dso-page/dso-page.module';
import { ItemSharedModule } from '../../app/item-page/item-shared.module';
import { ItemVersionsModule } from '../../app/item-page/versions/item-versions.module';
import { SystemWideAlertModule } from '../../app/system-wide-alert/system-wide-alert.module';
import { SharedBrowseByModule } from '../../app/shared/browse-by/shared-browse-by.module';

const DECLARATIONS = [
  FileSectionComponent,
  HomePageComponent,
  BrowseBySwitcherComponent,
  SearchPageComponent,
  ConfigurationSearchPageComponent,
  EndUserAgreementComponent,
  CollectionStatisticsPageComponent,
  CommunityStatisticsPageComponent,
  ItemStatisticsPageComponent,
  SiteStatisticsPageComponent,
  CommunityPageComponent,
  CollectionPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  SubmissionEditComponent,
  SubmissionImportExternalComponent,
  SubmissionSubmitComponent,
  WorkflowItemDeleteComponent,
  WorkflowItemSendBackComponent,
  BreadcrumbsComponent,
  CommunityPageSubCommunityListComponent,
  CicDigitalInfoComponent,
  HowToContributeComponent,
  ItemPageStatisticsComponent,
  RepositoryPolicyComponent,
  SearchExpandedNavbarComponent,
  SearchSettingsComponent,
  SearchResultsComponent,
  ResultsBackButtonComponent,
  ObjectListComponent,
  LoadingComponent,
  ExternalSourceEntryImportModalComponent,
  ComcolPageBrowseByComponent,
  AuthNavMenuComponent,
  CommunityPageSubCollectionListComponent,
];

@NgModule({
  imports: [
    AdminRegistriesModule,
    AdminSearchModule,
    AdminWorkflowModuleModule,
    AppModule,
    RootModule,
    BitstreamFormatsModule,
    BrowseByModule,
    CollectionFormModule,
    CollectionPageModule,
    CommonModule,
    CommunityFormModule,
    CommunityListPageModule,
    CommunityPageModule,
    CoreModule,
    DragDropModule,
    ItemPageModule,
    EditItemPageModule,
    FormsModule,
    HomePageModule,
    HttpClientModule,
    IdlePreloadModule,
    InfoModule,
    JournalEntitiesModule,
    MenuModule,
    MyDspaceSearchModule,
    NavbarModule,
    NgbModule,
    ProfilePageModule,
    RegisterEmailFormModule,
    ResearchEntitiesModule,
    RouterModule,
    ScrollToModule,
    SearchPageModule,
    SharedModule,
    StatisticsModule,
    StatisticsPageModule,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    SubmissionModule,
    MyDSpacePageModule,
    MyDspaceSearchModule,
    SearchModule,
    FormsModule,
    ResourcePoliciesModule,
    ComcolModule,
    EagerThemeModule,
    ResultsBackButtonModule,
    DsoSharedModule,
    DsoPageModule,
    ItemSharedModule,
    ItemVersionsModule,
    SystemWideAlertModule,
    SharedBrowseByModule,
  ],
  declarations: DECLARATIONS,
  exports: [
    CommunityPageSubCollectionListComponent
  ]
})

  /**
   * This module serves as an index for all the components in this theme.
   * It should import all other modules, so the compiler knows where to find any components referenced
   * from a component in this theme
   * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
   * to give lazily loaded components a context in which they can be compiled successfully
   */
  export class  LazyThemeModule {
}
