import { Component, Input, OnInit } from '@angular/core';
import { MetadataFieldWrapperComponent } from 'src/app/item-page/field-components/metadata-field-wrapper/metadata-field-wrapper.component';

/**
 * This component renders any content inside this wrapper.
 * The wrapper prints a label before the content (if available)
 */
@Component({
  selector: 'ds-cic-metadata-field-wrapper',
  styleUrls: ['./cic-metadata-field-wrapper.component.scss'],
  templateUrl: './cic-metadata-field-wrapper.component.html'
})
export class CicMetadataFieldWrapperComponent extends MetadataFieldWrapperComponent {
  @Input() inlineLabel: boolean;

  ngOnInit() {
    if (this.inlineLabel === undefined) {
      this.inlineLabel = true;
    }
  }

}
