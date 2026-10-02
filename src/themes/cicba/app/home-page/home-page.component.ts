import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { ThemedHomeNewsComponent } from '../../../../app/home-page/home-news/themed-home-news.component';
import { LastAccessionedItemsComponent } from './last-accessioned-items/last-accessioned-items.component';

@Component({
  selector: 'ds-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
  imports: [
    TranslateModule,
    ThemedHomeNewsComponent,
    LastAccessionedItemsComponent,
    AsyncPipe,
  ]
})
export class HomePageComponent extends BaseComponent {

}
