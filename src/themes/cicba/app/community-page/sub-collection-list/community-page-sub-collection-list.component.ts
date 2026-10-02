import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CommunityPageSubCollectionListComponent as BaseComponent }
  from '../../../../../app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { ObjectCollectionComponent } from 'src/app/shared/object-collection/object-collection.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';
@Component({
  selector: 'ds-community-page-sub-collection-list',
  // styleUrls: ['./community-page-sub-collection-list.component.scss'],
  styleUrls: ['../../../../../app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component.scss'],
  // templateUrl: './community-page-sub-collection-list.component.html',
  templateUrl: '../../../../../app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component.html',
  imports: [
    ObjectCollectionComponent,
    ErrorComponent,
    ThemedLoadingComponent,
    VarDirective,
    AsyncPipe,
    TranslateModule,
  ]
})
export class CommunityPageSubCollectionListComponent extends BaseComponent {}
