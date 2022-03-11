import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';

@Component({
    selector: 'ds-item-page-file-section',
    templateUrl: './file-section.component.html',
    styleUrls: ['./file-section.component.scss'],
    animations: [slideSidebarPadding],
})
export class FileSectionComponent extends BaseComponent {

}
