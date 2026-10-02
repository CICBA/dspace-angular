import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MetadataRepresentationListComponent } from 'src/app/item-page/simple/metadata-representation-list/metadata-representation-list.component';
import { CicMetadataFieldWrapperComponent } from 'src/themes/cicba/app/shared/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { MetadataRepresentationLoaderComponent } from 'src/app/shared/metadata-representation/metadata-representation-loader.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
@Component({
  selector: 'ds-cic-metadata-representation-list',
  styleUrls: ['./cic-metadata-representation-list.component.scss'],
  templateUrl: './cic-metadata-representation-list.component.html',
  imports: [
    RouterLink,
    CicMetadataFieldWrapperComponent,
    MetadataRepresentationLoaderComponent,
    ThemedLoadingComponent,
    AsyncPipe,
    TranslateModule,
  ],
})
/**
 * This component is used for displaying metadata
 * It expects an item and a metadataField to fetch metadata
 * It expects an itemType to resolve the metadata to a an item
 * It expects a label to put on top of the list
 */
export class CicMetadataRepresentationListComponent extends MetadataRepresentationListComponent {
  /**
   * The separator used to split the metadata values
   */
  @Input() separator: string;
}
