import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsService } from 'src/app/breadcrumbs/breadcrumbs.service';
import { HostWindowService } from 'src/app/shared/host-window.service';
import { BreadcrumbsComponent as BaseComponent } from '../../../../app/breadcrumbs/breadcrumbs.component';

/**
 * Component representing the breadcrumbs of a page
 */
@Component({
  selector: 'ds-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [
    AsyncPipe,
    RouterLink,
    TranslateModule,
  ]
})
export class BreadcrumbsComponent extends BaseComponent {

  constructor(breadcrumbsService: BreadcrumbsService, public windowService: HostWindowService) {
    super(breadcrumbsService);
  }
}
