import { Component, Input, OnInit } from '@angular/core';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-cic-date-metadata-values',
  templateUrl: './cic-date-metadata-values.component.html'
})
export class CicDateMetadataValuesComponent extends MetadataValuesComponent implements OnInit {
  @Input() inlineLabel: boolean;
  dateString: string;

  ngOnInit(): void {
      const date = this.mdValues[0].value;
      if (date.length === 10) {
        this.dateString = new Date(date).toLocaleDateString('es-AR',{ year: 'numeric', month: 'long', day: 'numeric' });
      } else if (date.length === 7) {
        this.dateString = new Date(date).toLocaleDateString('es-AR',{ year: 'numeric', month: 'long' });
      } else {
        this.dateString = date;
      }
  }
}
