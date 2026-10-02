import { AsyncPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import { ThemedAuthNavMenuComponent } from 'src/app/shared/auth-nav-menu/themed-auth-nav-menu.component';
import { ThemedLangSwitchComponent } from 'src/app/shared/lang-switch/themed-lang-switch.component';
import { ImpersonateNavbarComponent } from 'src/app/shared/impersonate-navbar/impersonate-navbar.component';
/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
  imports: [
    AsyncPipe,
    NgClass,
    TranslateModule,
    ThemedAuthNavMenuComponent,
    ThemedLangSwitchComponent,
    ImpersonateNavbarComponent,
  ],
})
export class NavbarComponent extends BaseComponent {
}
