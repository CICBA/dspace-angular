import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CommunityPageSubCommunityListComponent as BaseComponent }
  from '../../../../../app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { ObjectCollectionComponent } from 'src/app/shared/object-collection/object-collection.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';
@Component({
  selector: 'ds-community-page-sub-community-list',
  // styleUrls: ['./community-page-sub-community-list.component.scss'],
  styleUrls: ['../../../../../app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component.scss'],
  // templateUrl: './community-page-sub-community-list.component.html',
  templateUrl: '../../../../../app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component.html',
  imports: [
    ObjectCollectionComponent,
    ErrorComponent,
    ThemedLoadingComponent,
    VarDirective,
    AsyncPipe,
    TranslateModule,
  ]
})
export class CommunityPageSubCommunityListComponent extends BaseComponent {
  ngOnInit(): void {
    super.ngOnInit();
    this.config.pageSize = 100;
    this.initPage();
  }

}

