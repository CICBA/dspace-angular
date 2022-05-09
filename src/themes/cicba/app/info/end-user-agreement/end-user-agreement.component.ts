import { Component, OnInit } from '@angular/core';
import { EndUserAgreementComponent as BaseComponent } from '../../../../../app/info/end-user-agreement/end-user-agreement.component';
import { switchMap, map, take } from 'rxjs/operators';
import { isNotEmpty } from 'src/app/shared/empty.util';


@Component({
  selector: 'ds-home-news',
  templateUrl: './end-user-agreement.component.html'
})

/**
 * Component displaying the End User Agreement and an option to accept it
 */
export class EndUserAgreementComponent extends BaseComponent implements OnInit {

  /**
  * Accept user agreement without waiting for user input, CIC Digital doesn't have user agreement
  */
  ngOnInit(): void {
    this.accepted = true;
    this.submit();
  }

  /**
   * Submit the form
   * Set the End User Agreement but DON'T display any notification
   */
  submit() {
    this.endUserAgreementService.setUserAcceptedAgreement(this.accepted).pipe(
      switchMap(() => this.route.queryParams.pipe(map((params) => params.redirect))),
      take(1)
    ).subscribe((redirectUrl) => {
      if (isNotEmpty(redirectUrl)) {
        this.router.navigateByUrl(decodeURIComponent(redirectUrl));
      }
    });
  }
}

