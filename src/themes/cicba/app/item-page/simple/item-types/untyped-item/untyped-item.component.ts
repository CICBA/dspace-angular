import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { VersionedItemComponent } from '../../../../../../../app/item-page/simple/item-types/versioned-item/versioned-item.component';
import { Context } from 'src/app/core/shared/context.model';
import { MetadataValue } from 'src/app/core/shared/metadata.models';
import { VersionHistoryDataService } from 'src/app/core/data/version-history-data.service';
import { VersionDataService } from 'src/app/core/data/version-data.service';
import { ItemVersionsSharedService } from 'src/app/shared/item/item-versions/item-versions-shared.service';
import { WorkspaceitemDataService } from 'src/app/core/submission/workspaceitem-data.service';
import { SearchService } from 'src/app/core/shared/search/search.service';
import { RouteService } from 'src/app/core/services/route.service';
import { ItemDataService } from 'src/app/core/data/item-data.service';
import { HostWindowService } from 'src/app/shared/host-window.service';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent(Item, ViewMode.StandalonePage, Context.Any, 'cicba')
@Component({
  selector: 'ds-untyped-item',
  styleUrls: ['./untyped-item.component.scss'],
  templateUrl: './untyped-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UntypedItemComponent extends VersionedItemComponent implements OnInit {

  identifierOtherMetadataName: string = 'dcterms.identifier.other';
  itemIdentifiers: { mdValue: MetadataValue, label: string }[];

  constructor(modalService: NgbModal, versionHistoryService: VersionHistoryDataService, translateService: TranslateService, versionService: VersionDataService, itemVersionShared: ItemVersionsSharedService, router: Router, workspaceItemDataService: WorkspaceitemDataService, searchService: SearchService, itemService: ItemDataService, routeService: RouteService, public windowService: HostWindowService) {
    super(modalService, versionHistoryService, translateService, versionService, itemVersionShared, router, workspaceItemDataService, searchService, itemService, routeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setIdentifierOtherValues();
  }

  setIdentifierOtherValues(): void {
    this.itemIdentifiers = [];
    var length = this.itemIdentifiers.push({
      mdValue: new MetadataValue(),
      label: 'HDL'
    });
    this.itemIdentifiers[length - 1].mdValue.value = this.object?.handle;
    this.object.allMetadata([this.identifierOtherMetadataName]).forEach(
      (mdValue, index) => {
        var charIndex = -1;
        var label = "";
        if (!mdValue.value.startsWith("http")) {
          var splitChar = mdValue.value.includes(":") ? ":" : " ";
          charIndex = mdValue.value.indexOf(splitChar);
          label = mdValue.value.substring(0, charIndex).toUpperCase();
        } else {
          label = "URL";
        }
        var value = mdValue.value.substring(charIndex + 1).trim();
        var length = this.itemIdentifiers.push({
          mdValue: new MetadataValue(),
          label: label
        });
        this.itemIdentifiers[length - 1].mdValue.value = value;
      }
    );
  }
}
