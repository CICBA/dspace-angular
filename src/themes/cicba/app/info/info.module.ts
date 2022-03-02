import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';
import { InfoRoutingModule } from './info-routing.module';
import { FeedbackGuard } from 'src/app/core/feedback/feedback.guard';

const DECLARATIONS = [
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfoRoutingModule,
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [FeedbackGuard]
})
export class InfoModule {
}
