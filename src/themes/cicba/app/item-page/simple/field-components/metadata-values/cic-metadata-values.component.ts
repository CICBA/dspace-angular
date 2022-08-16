import { Component, Input } from '@angular/core';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-cic-metadata-values',
  templateUrl: './cic-metadata-values.component.html'
})
export class CicMetadataValuesComponent extends MetadataValuesComponent {
  @Input() inlineLabel: boolean;
  @Input() authorityUrl: boolean;

}
