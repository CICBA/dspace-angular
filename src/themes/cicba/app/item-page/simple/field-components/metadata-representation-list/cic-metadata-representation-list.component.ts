import { Component } from '@angular/core';
import { MetadataRepresentationListComponent } from 'src/app/item-page/simple/metadata-representation-list/metadata-representation-list.component';

@Component({
  selector: 'ds-cic-metadata-representation-list',
  templateUrl: './cic-metadata-representation-list.component.html'
})
/**
 * This component is used for displaying metadata
 * It expects an item and a metadataField to fetch metadata
 * It expects an itemType to resolve the metadata to a an item
 * It expects a label to put on top of the list
 */
export class CicMetadataRepresentationListComponent extends MetadataRepresentationListComponent {

}
