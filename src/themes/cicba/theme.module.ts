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
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { HomePageModule } from '../../app/home-page/home-page.module';
import { RootComponent } from './app/root/root.component';
import { AppModule } from '../../app/app.module';
import { PublicationComponent } from './app/item-page/simple/item-types/publication/publication.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { RouterModule } from '@angular/router';
import { AccessControlModule } from '../../app/access-control/access-control.module';
import { BrowseBySwitcherComponent } from './app/browse-by/browse-by-switcher/browse-by-switcher.component';
import { CommunityListPageComponent } from './app/community-list-page/community-list-page.component';
import { CommunityListPageModule } from '../../app/community-list-page/community-list-page.module';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { InfoModule } from './app/info/info.module';
import { PageNotFoundComponent } from './app/pagenotfound/pagenotfound.component';
import { ObjectNotFoundComponent } from './app/lookup-by-id/objectnotfound/objectnotfound.component';
import { ForbiddenComponent } from './app/forbidden/forbidden.component';
import { CollectionStatisticsPageComponent } from './app/statistics-page/collection-statistics-page/collection-statistics-page.component';
import { CommunityStatisticsPageComponent } from './app/statistics-page/community-statistics-page/community-statistics-page.component';
import { StatisticsPageModule } from '../../app/statistics-page/statistics-page.module';
import { ItemStatisticsPageComponent } from './app/statistics-page/item-statistics-page/item-statistics-page.component';
import { SiteStatisticsPageComponent } from './app/statistics-page/site-statistics-page/site-statistics-page.component';
import { CommunityPageComponent } from './app/community-page/community-page.component';
import { CollectionPageComponent } from './app/collection-page/collection-page.component';
import { CommunityPageModule } from '../../app/community-page/community-page.module';
import { CollectionPageModule } from '../../app/collection-page/collection-page.module';
import { ConfigurationSearchPageComponent } from './app/search-page/configuration-search-page.component';
import { FullItemPageComponent } from './app/item-page/full/full-item-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { LogoutPageComponent } from './app/logout-page/logout-page.component';
import { CreateProfileComponent } from './app/register-page/create-profile/create-profile.component';
import { ForgotEmailComponent } from './app/forgot-password/forgot-password-email/forgot-email.component';
import { ForgotPasswordFormComponent } from './app/forgot-password/forgot-password-form/forgot-password-form.component';
import { ProfilePageComponent } from './app/profile-page/profile-page.component';
import { RegisterEmailComponent } from './app/register-page/register-email/register-email.component';
import { SubmissionEditComponent } from './app/submission/edit/submission-edit.component';
import { SubmissionImportExternalComponent } from './app/submission/import-external/submission-import-external.component';
import { SubmissionSubmitComponent } from './app/submission/submit/submission-submit.component';
import { MyDSpacePageComponent } from './app/my-dspace-page/my-dspace-page.component';
import { WorkflowItemSendBackComponent } from './app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component';
import { WorkflowItemDeleteComponent } from './app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component';
import { SubmissionModule } from '../../app/submission/submission.module';
import { MyDSpacePageModule } from '../../app/my-dspace-page/my-dspace-page.module';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { BreadcrumbsComponent } from './app/breadcrumbs/breadcrumbs.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { FileSectionComponent } from './app/item-page/simple/field-components/file-section/file-section.component';
import { SearchModule } from 'src/app/shared/search/search.module';
import { ResourcePoliciesModule } from 'src/app/shared/resource-policies/resource-policies.module';
import { ComcolModule } from 'src/app/shared/comcol/comcol.module';
import { CicDigitalInfoComponent } from './app/info/cic-digital-info/cic-digital-info.component';
import { HowToContributeComponent } from './app/info/how-to-contribute/how-to-contribute.component';
import { RepositoryPolicyComponent } from './app/info/repository-policy/repository-policy.component';
import { LastAccessionedItemsComponent } from './app/home-page/last-accessioned-items/last-accessioned-items.component';
import { ItemSearchResultListElementComponent } from './app/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';

const DECLARATIONS = [
  FileSectionComponent,
  HomePageComponent,
  HomeNewsComponent,
  RootComponent,
  PublicationComponent,
  UntypedItemComponent,
  BrowseBySwitcherComponent,
  CommunityListPageComponent,
  SearchPageComponent,
  ConfigurationSearchPageComponent,
  PageNotFoundComponent,
  ObjectNotFoundComponent,
  ForbiddenComponent,
  CollectionStatisticsPageComponent,
  CommunityStatisticsPageComponent,
  ItemStatisticsPageComponent,
  SiteStatisticsPageComponent,
  CommunityPageComponent,
  CollectionPageComponent,
  FullItemPageComponent,
  LoginPageComponent,
  LogoutPageComponent,
  CreateProfileComponent,
  ForgotEmailComponent,
  ForgotPasswordFormComponent,
  ProfilePageComponent,
  RegisterEmailComponent,
  MyDSpacePageComponent,
  SubmissionEditComponent,
  SubmissionImportExternalComponent,
  SubmissionSubmitComponent,
  WorkflowItemDeleteComponent,
  WorkflowItemSendBackComponent,
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  HeaderNavbarWrapperComponent,
  BreadcrumbsComponent,
  CicDigitalInfoComponent,
  HowToContributeComponent,
  RepositoryPolicyComponent,
  LastAccessionedItemsComponent,
  ItemSearchResultListElementComponent
];

@NgModule({
  imports: [
    AccessControlModule,
    AdminRegistriesModule,
    AdminSearchModule,
    AdminWorkflowModuleModule,
    AppModule,
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
    ComcolModule
  ],
  declarations: DECLARATIONS
})

  /**
   * This module serves as an index for all the components in this theme.
   * It should import all other modules, so the compiler knows where to find any components referenced
   * from a component in this theme
   * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
   * to give lazily loaded components a context in which they can be compiled successfully
   */
class ThemeModule {
}
