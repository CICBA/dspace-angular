import { Component } from '@angular/core';
import { CommunityPageSubCommunityListComponent as BaseComponent} from '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component';

@Component({
  selector: 'ds-cic-community-page-sub-community-list',
  styleUrls: ['../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.scss'],
  templateUrl: '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.html'
})
/**
 * Component to render the sub-communities of a Community
 */
export class CicCommunityPageSubCommunityListComponent extends BaseComponent {

  ngOnInit(): void {
    super.ngOnInit();
    this.config.pageSize = 100;
    this.initPage();
  }

}

