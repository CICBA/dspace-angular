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

  copyToClipboard(el: HTMLDivElement) {

    if (navigator.clipboard) {
      navigator.clipboard.writeText(el.innerText).then(() => {
        //
        // TODO mostrar leyenda de "copiado" al usuario, cuando hace click en el boton de copiar
        // 
        // document.getElementById("copied").style.display = "inline";
        // setTimeout( function() {
        //     document.getElementById("copied").style.display = "none";
        // }, 1000);
      }, (error) => {
        console.log(error)
      });
    } else {
      console.log('Browser do not support Clipboard API')
    }

  }
}
