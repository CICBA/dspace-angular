import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';
import { Bitstream } from 'src/app/core/shared/bitstream.model';

@Component({
    selector: 'ds-item-page-file-section',
    templateUrl: './file-section.component.html',
    styleUrls: ['./file-section.component.scss'],
    animations: [slideSidebarPadding],
})
export class FileSectionComponent extends BaseComponent {

    descriptionMetadataName: string = 'dc.description';

    getFileName(file: Bitstream): string {
        const fileDescription = file.firstMetadataValue(this.descriptionMetadataName);
        return fileDescription? fileDescription : file.name;
    }
}
