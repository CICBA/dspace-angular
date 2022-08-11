import { Component, Input } from '@angular/core';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component.
 * It puts the given 'separator' between each two values.
 */
@Component({
  selector: 'ds-badge-metadata-values',
  templateUrl: './badge-metadata-values.component.html',
  styleUrls: ['./badge-metadata-values.component.scss'],
})
export class BadgeMetadataValuesComponent extends MetadataValuesComponent {
  @Input() badgeType: string;
  @Input() badgeUrl: string;
  @Input() badgeLabel: string;
  @Input() badgeLabelType: string;
  @Input() copyToClipboardButton: boolean = false;

  copyToClipboard(el: HTMLDivElement, id: string) {

    if (navigator.clipboard) {
      navigator.clipboard.writeText(el.innerText).then(() => {
        document.getElementById(id).classList.remove('fa-copy');
        document.getElementById(id).classList.add('fa-check');
        setTimeout( function() {
          document.getElementById(id).classList.remove('fa-check');
          document.getElementById(id).classList.add('fa-copy');
          }, 1000);
      }, (error) => {
        console.log(error)
      });
    } else {
      console.log('Browser do not support Clipboard API')
    }

  }
}
