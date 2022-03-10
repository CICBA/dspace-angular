import { Component, Input } from '@angular/core';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-badge-metadata-values',
  templateUrl: './badge-metadata-values.component.html'
})
export class BadgeMetadataValuesComponent extends MetadataValuesComponent {
  @Input() badgeType: string;
}
