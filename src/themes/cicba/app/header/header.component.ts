import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
})
export class HeaderComponent extends BaseComponent {

  router: string;
  constructor(private _router: Router, menuService: MenuService){
    super(menuService);
    this.router = _router.url;
  }
}
