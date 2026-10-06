import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from 'src/app/core/shared/context.model';
import { MetadataValue } from 'src/app/core/shared/metadata.models';
import { VersionHistoryDataService } from 'src/app/core/data/version-history-data.service';
import { VersionDataService } from 'src/app/core/data/version-data.service';
import { ItemVersionsSharedService } from 'src/app/item-page/versions/item-versions-shared.service';
import { WorkspaceitemDataService } from 'src/app/core/submission/workspaceitem-data.service';
import { SearchService } from 'src/app/shared/search/search.service';
import { RouteService } from 'src/app/core/services/route.service';
import { ItemDataService } from 'src/app/core/data/item-data.service';
import { HostWindowService } from 'src/app/shared/host-window.service';
import {
  UntypedItemComponent as BaseComponent
} from '../../../../../../../app/item-page/simple/item-types/untyped-item/untyped-item.component';
import { MiradorViewerComponent } from 'src/app/item-page/mirador-viewer/mirador-viewer.component';
import { DsoEditMenuComponent } from 'src/app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { BadgeMetadataValuesComponent } from 'src/themes/cicba/app/item-page/simple/field-components/badge-metadata-values/badge-metadata-values.component';
import { ThemedAccessStatusBadgeComponent } from 'src/app/shared/object-collection/shared/badges/access-status-badge/themed-access-status-badge.component';
import { MetadataValuesComponent } from 'src/app/item-page/field-components/metadata-values/metadata-values.component';
import { CicDateMetadataValuesComponent } from 'src/themes/cicba/app/item-page/simple/field-components/date-metadata-values/cic-date-metadata-values.component';
import { CicMetadataRepresentationListComponent } from 'src/themes/cicba/app/item-page/simple/field-components/metadata-representation-list/cic-metadata-representation-list.component';
import { CicMetadataValuesComponent } from 'src/themes/cicba/app/item-page/simple/field-components/metadata-values/cic-metadata-values.component';
import { CicMetadataFieldWrapperComponent } from 'src/themes/cicba/app/shared/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { MetadataFieldWrapperComponent } from 'src/app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';
import { ThemedMediaViewerComponent } from 'src/app/item-page/media-viewer/themed-media-viewer.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { FileSectionComponent } from 'src/themes/cicba/app/item-page/simple/field-components/file-section/file-section.component';
/**
 * Component that represents a publication Item page
 */

@listableObjectComponent(Item, ViewMode.StandalonePage, Context.Any, 'cicba')
@Component({
  selector: 'ds-untyped-item',
  styleUrls: ['./untyped-item.component.scss'],
  templateUrl: './untyped-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    TranslateModule,
    AsyncPipe,
    MiradorViewerComponent,
    DsoEditMenuComponent,
    BadgeMetadataValuesComponent,
    ThemedAccessStatusBadgeComponent,
    MetadataValuesComponent,
    CicDateMetadataValuesComponent,
    CicMetadataRepresentationListComponent,
    CicMetadataValuesComponent,
    CicMetadataFieldWrapperComponent,
    MetadataFieldWrapperComponent,
    ThemedThumbnailComponent,
    ThemedMediaViewerComponent,
    TruncatableComponent,
    TruncatablePartComponent,
    FileSectionComponent,
  ],
})
export class UntypedItemComponent extends BaseComponent implements OnInit {

  identifierOtherMetadataName = 'dcterms.identifier.other';
  itemIdentifiers: { mdValue: MetadataValue, label: string }[];

  constructor(
    private modalService: NgbModal,
    private versionHistoryService: VersionHistoryDataService,
    private translateService: TranslateService,
    private versionService: VersionDataService,
    private itemVersionShared: ItemVersionsSharedService,
    public router: Router,
    private workspaceItemDataService: WorkspaceitemDataService,
    private searchService: SearchService,
    private itemService: ItemDataService,
    public routeService: RouteService,
    public windowService: HostWindowService
  ) {
    super(routeService,router);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setIdentifierOtherValues();
  }

  setIdentifierOtherValues(): void {
    this.itemIdentifiers = [];
    const length = this.itemIdentifiers.push({
      mdValue: new MetadataValue(),
      label: 'HDL'
    });
    this.itemIdentifiers[length - 1].mdValue.value = this.object?.handle;
    this.object.allMetadata([this.identifierOtherMetadataName]).forEach(
      (mdValue, index) => {
        let charIndex = -1;
        let label = '';
        if (!mdValue.value.startsWith('http')) {
          const splitChar = mdValue.value.includes(':') ? ':' : ' ';
          charIndex = mdValue.value.indexOf(splitChar);
          label = mdValue.value.substring(0, charIndex).toUpperCase();
        } else {
          label = 'URL';
        }
        const value = mdValue.value.substring(charIndex + 1).trim();
        const identifierListLength = this.itemIdentifiers.push({
          mdValue: new MetadataValue(),
          label: label
        });
        this.itemIdentifiers[identifierListLength - 1].mdValue.value = value;
      }
    );
  }

  getLabelByDcType(type, qualifier): string {
    return ( type === 'Documento de conferencia' ) ? `item.page.dcterms.isPartOf.${qualifier}.event` : `item.page.dcterms.isPartOf.${qualifier}`;
  }
}
