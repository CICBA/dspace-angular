import { Item } from '../../../../core/shared/item.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RouteService } from '../../../../core/services/route.service';

export const isIiifEnabled = (item: Item) => {
  return !!item.firstMetadataValue('dspace.iiif.enabled');

};

export const isIiifSearchEnabled = (item: Item) => {
  return !!item.firstMetadataValue('iiif.search.enabled');

};

/**
 * Checks to see if previous route was a dspace search. If
 * it was, the search term is extracted and subsequently passed
 * to the mirador viewer component.
 * @param item the dspace object
 * @param routeService
 */
export const getDSpaceQuery = (item: Item, routeService: RouteService): Observable<string> => {
  return routeService.getPreviousUrl().pipe(
    filter(r => {
      return r.includes('/search');
    }),
    map(r => {
      const arr = r.split('&');
      const q = arr[1];
      const v = q.split('=');
      return v[1];
    })
  );
};
