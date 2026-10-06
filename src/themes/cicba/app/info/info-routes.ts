import {
  Route,
  Routes,
} from '@angular/router';
import { i18nBreadcrumbResolver } from '@dspace/core/breadcrumbs/i18n-breadcrumb.resolver';
import { feedbackGuard } from '@dspace/core/feedback/feedback.guard';
import {
  END_USER_AGREEMENT_PATH,
  FEEDBACK_PATH,
} from '@dspace/core/router/info-routing-paths';
import { hasValue } from '@dspace/shared/utils/empty.util';

import { environment } from 'src/environments/environment';
import { ThemedEndUserAgreementComponent } from 'src/app/info/end-user-agreement/themed-end-user-agreement.component';
import { ThemedFeedbackComponent } from 'src/app/info/feedback/themed-feedback.component';

import { 
  CIC_DIGITAL_INFO_PATH,
  HOW_TO_CONTRIBUTE_PATH,
  REPOSITORY_POLICY_PATH
} from 'src/themes/cicba/app/info/info-routing-paths';

import { CicDigitalInfoComponent } from 'src/themes/cicba/app/info/cic-digital-info/cic-digital-info.component';
import { HowToContributeComponent } from 'src/themes/cicba/app/info/how-to-contribute/how-to-contribute.component';
import { RepositoryPolicyComponent } from 'src/themes/cicba/app/info/repository-policy/repository-policy.component';

// RUTAS CICBA
export const ROUTES: Routes = [
  {
    path: CIC_DIGITAL_INFO_PATH,
    component: CicDigitalInfoComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'info.cic-digital-info.title', breadcrumbKey: 'info.cic-digital-info' },
  },
  {
    path: HOW_TO_CONTRIBUTE_PATH,
    component: HowToContributeComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'info.how-to-contribute.title', breadcrumbKey: 'info.how-to-contribute' },
  },
  {
    path: REPOSITORY_POLICY_PATH,
    component: RepositoryPolicyComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'info.repository-policy.title', breadcrumbKey: 'info.repository-policy' },
  },
  environment.info.enableEndUserAgreement ? {
    path: END_USER_AGREEMENT_PATH,
    component: ThemedEndUserAgreementComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' },
  } : undefined,
  {
    path: FEEDBACK_PATH,
    component: ThemedFeedbackComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
    canActivate: [feedbackGuard]
  },
].filter((route: Route) => hasValue(route));
