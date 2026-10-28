import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EndUserAgreementComponent as BaseComponent } from '../../../../../app/info/end-user-agreement/end-user-agreement.component';

@Component({
  selector: 'ds-home-news',
  // styleUrls: ['./end-user-agreement.component.scss'],
  styleUrls: ['../../../../../app/info/end-user-agreement/end-user-agreement.component.scss'],
  templateUrl: './end-user-agreement.component.html',
  //templateUrl: '../../../../../app/info/end-user-agreement/end-user-agreement.component.html',
  imports: [
    TranslateModule,
    FormsModule,
  ]
})

/**
 * Component displaying the End User Agreement and an option to accept it
 */
export class EndUserAgreementComponent extends BaseComponent {}

