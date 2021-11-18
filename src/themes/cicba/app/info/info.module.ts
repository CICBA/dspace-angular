import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';
import { InfoRoutingModule } from './info-routing.module';

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
  ]
})
export class InfoModule {
}
