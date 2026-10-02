import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-repository-policy',
  styleUrls: ['./repository-policy.component.scss'],
  templateUrl: './repository-policy.component.html',
  imports: [
    TranslateModule,
  ]
})

/**
 * Component displaying information about the repository policies
 */
export class RepositoryPolicyComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
