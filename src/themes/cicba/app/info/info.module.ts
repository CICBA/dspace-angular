import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';

const DECLARATIONS = [
];

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
})
export class InfoModule {
}
