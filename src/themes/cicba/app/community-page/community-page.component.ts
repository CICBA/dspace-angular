import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommunityPageComponent as BaseComponent} from '../../../../app/community-page/community-page.component';
import { fadeInOut } from '../../../../app/shared/animations/fade';
import { ComcolPageHeaderComponent } from 'src/app/shared/comcol/comcol-page-header/comcol-page-header.component';
import { ComcolPageLogoComponent } from 'src/app/shared/comcol/comcol-page-logo/comcol-page-logo.component';
import { BadgeMetadataValuesComponent } from 'src/themes/cicba/app/item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { ThemedComcolPageContentComponent } from 'src/app/shared/comcol/comcol-page-content/themed-comcol-page-content.component';
import { ComcolPageBrowseByComponent } from 'src/themes/custom/app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component';
import { CommunityPageSubCommunityListComponent } from 'src/themes/custom/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component';
import { CommunityPageSubCollectionListComponent } from 'src/themes/custom/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';

@Component({
  selector: 'ds-community-page',
  templateUrl: './community-page.component.html',
  // templateUrl: '../../../../app/community-page/community-page.component.html',
  // styleUrls: ['./community-page.component.scss']
  styleUrls: ['../../../../app/community-page/community-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
  imports: [
    AsyncPipe,
    RouterOutlet,
    TranslateModule,
    ComcolPageHeaderComponent,
    ComcolPageLogoComponent,
    BadgeMetadataValuesComponent,
    ThemedComcolPageContentComponent,
    ComcolPageBrowseByComponent,
    CommunityPageSubCommunityListComponent,
    CommunityPageSubCollectionListComponent,
    ErrorComponent,
    ThemedLoadingComponent,
    VarDirective,
  ]
})
/**
 * This component represents a detail page for a single community
 */
export class CommunityPageComponent extends BaseComponent {}
