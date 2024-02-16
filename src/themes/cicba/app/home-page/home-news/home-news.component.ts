import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable, map, startWith, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';

@Component({
  selector: 'ds-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html'
})

/**
 * Component to render the news section on the home page
 */

export class HomeNewsComponent extends BaseComponent {

  placeholder$: Observable<string>;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { 
    super();
    this.placeholder$ = this.getTotalItemCount();
  }

  private getTotalItemCount(): Observable<string> {
    const api = `${environment.rest.baseUrl}/api/items/total-count`;
    return this.http.get(api).pipe(
      timeout(5000),
      map(total => this.createPlaceholder(total as number)),
      startWith("Buscando recursos...")
    );
  }

  private createPlaceholder(total: number): string {
    // const placeholder = `Busque entre los ${total} recursos disponibles en el repositorio`;
    const placeholder = `Buscar en el repositorio (${total} ítems disponibles)`;
    this.cd.detectChanges();
    return placeholder;
  }
}

