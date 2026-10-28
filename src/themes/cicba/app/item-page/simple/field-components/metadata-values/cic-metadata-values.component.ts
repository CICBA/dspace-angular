import { Component, Input } from '@angular/core';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';
import { TranslateModule } from '@ngx-translate/core';
import { CicMetadataFieldWrapperComponent } from 'src/themes/cicba/app/shared/metadata-field-wrapper/cic-metadata-field-wrapper.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-cic-metadata-values',
  templateUrl: './cic-metadata-values.component.html',
  imports: [
    TranslateModule,
    CicMetadataFieldWrapperComponent,
  ],
})
export class CicMetadataValuesComponent extends MetadataValuesComponent {
  @Input() inlineLabel: boolean;
  @Input() authorityUrl: boolean;

}
