import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'ds-repository-policy',
  styleUrls: ['./repository-policy.component.scss'],
  templateUrl: './repository-policy.component.html'
})

/**
 * Component displaying information about the repository policies
 */
export class RepositoryPolicyComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
