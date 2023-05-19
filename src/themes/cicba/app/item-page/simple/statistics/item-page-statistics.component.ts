import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/shared/item.model';
import { UsageReportDataService } from 'src/app/core/statistics/usage-report-data.service';
import { StatisticsPageComponent } from 'src/app/statistics-page/statistics-page/statistics-page.component';
import { Observable } from 'rxjs';
import { DSpaceObject } from 'src/app/core/shared/dspace-object.model';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
@Component({
  selector: 'ds-item-page-statistics',
  styleUrls: ['./item-page-statistics.component.scss'],
  templateUrl: './item-page-statistics.component.html',
  providers: [UsageReportDataService],
})
export class ItemPageStatisticsComponent extends StatisticsPageComponent<Item> {
  /**
   * The report types to show on this statistics page.
   */
  types: string[] = [
    'TotalVisits',
    'TotalDownloads',
  ];

  /**
   * The item used as a scope for the statistics
   */
  @Input() item: Item;

  /**
   * The report icons to show depending on the statistic type.
   */
  statIcons = { 'TotalVisits': 'fa fa-eye', 'TotalDownloads': 'fa fa-download' };

  /**
   * Get the scope dso for this statistics page, as an Observable.
   */
  protected getScope$(): Observable<DSpaceObject> {
    return new Observable((observer) => {
      observer.next(this.item);
    });
  }

}
