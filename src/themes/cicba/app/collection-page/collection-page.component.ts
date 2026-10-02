import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CollectionPageComponent as BaseComponent} from '../../../../app/collection-page/collection-page.component';
import { fadeIn, fadeInOut } from '../../../../app/shared/animations/fade';
import { ComcolPageHeaderComponent } from 'src/app/shared/comcol/comcol-page-header/comcol-page-header.component';
import { ComcolPageLogoComponent } from 'src/app/shared/comcol/comcol-page-logo/comcol-page-logo.component';
import { BadgeMetadataValuesComponent } from '../item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { ThemedComcolPageContentComponent } from 'src/app/shared/comcol/comcol-page-content/themed-comcol-page-content.component';
import { ThemedComcolPageBrowseByComponent } from 'src/app/shared/comcol/comcol-page-browse-by/themed-comcol-page-browse-by.component';
import { ObjectCollectionComponent } from 'src/app/shared/object-collection/object-collection.component';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { DsoEditMenuComponent } from 'src/app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { ThemedComcolPageHandleComponent } from 'src/app/shared/comcol/comcol-page-handle/themed-comcol-page-handle.component';

@Component({
  selector: 'ds-collection-page',
  // templateUrl: './collection-page.component.html',
  templateUrl: '../../../../app/collection-page/collection-page.component.html',
  // styleUrls: ['./collection-page.component.scss']
  styleUrls: ['../../../../app/collection-page/collection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeIn,
    fadeInOut,
  ],
  imports: [
    AsyncPipe,
    RouterOutlet,
    TranslateModule,
    ComcolPageHeaderComponent,
    ComcolPageLogoComponent,
    BadgeMetadataValuesComponent,
    ThemedComcolPageContentComponent,
    ThemedComcolPageBrowseByComponent,
    ObjectCollectionComponent,
    ErrorComponent,
    ThemedLoadingComponent,
    DsoEditMenuComponent,
    ThemedComcolPageHandleComponent,
  ]
})
/**
 * This component represents a detail page for a single collection
 */
export class CollectionPageComponent extends BaseComponent {}
