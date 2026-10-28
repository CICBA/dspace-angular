import { 
  AsyncPipe,
  NgTemplateOutlet,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsService } from 'src/app/breadcrumbs/breadcrumbs.service';
import { HostWindowService } from 'src/app/shared/host-window.service';
import { BreadcrumbsComponent as BaseComponent } from '../../../../app/breadcrumbs/breadcrumbs.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';

/**
 * Component representing the breadcrumbs of a page
 */
@Component({
  selector: 'ds-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    RouterLink,
    TranslateModule,
    VarDirective,
  ]
})
export class BreadcrumbsComponent extends BaseComponent {

  constructor(breadcrumbsService: BreadcrumbsService, public windowService: HostWindowService) {
    super(breadcrumbsService);
  }
}
