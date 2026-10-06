import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';
import { Bitstream } from 'src/app/core/shared/bitstream.model';
import { FileSizePipe } from 'src/app/shared/utils/file-size-pipe';
import { CicMetadataFieldWrapperComponent } from 'src/themes/cicba/app/shared/metadata-field-wrapper/cic-metadata-field-wrapper.component';
import { ThemedFileDownloadLinkComponent } from 'src/app/shared/file-download-link/themed-file-download-link.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';
@Component({
    selector: 'ds-item-page-file-section',
    templateUrl: './file-section.component.html',
    styleUrls: ['./file-section.component.scss'],
    animations: [slideSidebarPadding],
    imports: [
        TranslateModule,
        RouterLink,
        AsyncPipe,
        FileSizePipe,
        CicMetadataFieldWrapperComponent,
        ThemedFileDownloadLinkComponent,
        ThemedLoadingComponent,
        VarDirective,
    ]
})
export class FileSectionComponent extends BaseComponent {

    descriptionMetadataName: string = 'dc.description';

    getFileName(file: Bitstream): string {
        const fileDescription = file.firstMetadataValue(this.descriptionMetadataName);
        return fileDescription? fileDescription : file.name;
    }
}
