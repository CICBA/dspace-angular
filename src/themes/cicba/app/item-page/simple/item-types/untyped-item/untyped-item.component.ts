import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { VersionedItemComponent } from '../../../../../../../app/item-page/simple/item-types/versioned-item/versioned-item.component';
import { Context } from 'src/app/core/shared/context.model';
import { MetadataValue } from 'src/app/core/shared/metadata.models';

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
  identifierOtherValues: { mdValue: MetadataValue, label: string }[];

  ngOnInit(): void {
    this.setIdentifierOtherValues();
  }

  setIdentifierOtherValues(): void {
    this.identifierOtherValues = [];
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
        this.identifierOtherValues[index] = {
          mdValue: new MetadataValue(),
          label: label
        }
        this.identifierOtherValues[index].mdValue.value = value;
      }
    );
  }
}
