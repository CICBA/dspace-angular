import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../../../../app/core/breadcrumbs/i18n-breadcrumb.resolver';
import { CIC_DIGITAL_INFO_PATH, HOW_TO_CONTRIBUTE_PATH, REPOSITORY_POLICY_PATH } from './info-routing-paths';
import { CicDigitalInfoComponent } from './cic-digital-info/cic-digital-info.component';
import { HowToContributeComponent } from './how-to-contribute/how-to-contribute.component';
import { RepositoryPolicyComponent } from './repository-policy/repository-policy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: CIC_DIGITAL_INFO_PATH,
        component: CicDigitalInfoComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.cic-digital-info.title', breadcrumbKey: 'info.cic-digital-info' }
      }
    ]),
    RouterModule.forChild([
      {
        path: HOW_TO_CONTRIBUTE_PATH,
        component: HowToContributeComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.how-to-contribute.title', breadcrumbKey: 'info.how-to-contribute' }
      }
    ]),
    RouterModule.forChild([
      {
        path: REPOSITORY_POLICY_PATH,
        component: RepositoryPolicyComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.repository-policy.title', breadcrumbKey: 'info.repository-policy' }
      }
    ])
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
