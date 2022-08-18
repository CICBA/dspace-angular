import { Component } from '@angular/core';
import { BrowseByDataType, rendersBrowseBy } from 'src/app/browse-by/browse-by-switcher/browse-by-decorator';
import { BrowseByMetadataPageComponent as BaseComponent } from 'src/app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';

@Component({
  selector: 'ds-browse-by-metadata-page',
  styleUrls: ['./browse-by-metadata-page.component.scss'],
  templateUrl: './browse-by-metadata-page.component.html'
})
/**
 * Component for browsing (items) by metadata definition
 * A metadata definition (a.k.a. browse id) is a short term used to describe one or multiple metadata fields.
 * An example would be 'author' for 'dc.contributor.*'
 */
@rendersBrowseBy(BrowseByDataType.Metadata)
export class BrowseByMetadataPageComponent extends BaseComponent {
}
