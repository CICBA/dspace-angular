import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';
import { HostWindowService } from 'src/app/shared/host-window.service';
import { ThemedAuthNavMenuComponent } from 'src/app/shared/auth-nav-menu/themed-auth-nav-menu.component';
import { ThemedLangSwitchComponent } from 'src/app/shared/lang-switch/themed-lang-switch.component';
import { ImpersonateNavbarComponent } from 'src/app/shared/impersonate-navbar/impersonate-navbar.component';
import { ThemedNavbarComponent } from 'src/app/navbar/themed-navbar.component';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
  imports: [
    TranslateModule,
    ThemedAuthNavMenuComponent,
    ThemedLangSwitchComponent,
    ImpersonateNavbarComponent,
    ThemedNavbarComponent,
  ]
})
export class HeaderComponent extends BaseComponent {

  router: string;
  constructor(private _router: Router, menuService: MenuService, windowService: HostWindowService) {
    super(menuService, windowService);
    this.router = _router.url;
  }
}
