import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';

/**
 * This component renders the usage-stats badge provided by La Referencia.
 */
@Component({
  selector: 'ds-cic-usage-stats',
  templateUrl: './cic-usage-stats.component.html'
})

export class CicUsageStatsComponent implements OnInit {
   
    @Input() item!: Item;
    @Input() version: string = '1.1.5';
    @Input() baseIdentifierOAI! : string;
    @Input() identifierHandle? : string = '/handle/[0-9.]+/([0-9]+)/?';
    @Input() nodoName! : string;
    @Input() repositoryName! : string;
    @Input() contryCode! : string;
    @Input() identifierMetaField? : string;
    @Input() nationalSource! : string;
    @Input() repositorySource! : string;

    constructor() {
        // script
        (function(w, d, s, o, p, f, js, fjs) {
            w[o] = w[o] || function() {
                (w[o][p] = w[o][p] || {});
                Object.assign(w[o][p], arguments[0] || {});
            };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'lrw', 'parameters', 'https://cdn.jsdelivr.net/gh/lareferencia/lrw@${this.version}/dist/lrw.js'));
    }

    ngOnInit() {
        // Llamar a la función lrw una vez que se cargue el script
        if (typeof window['lrw'] === 'function') {
          window['lrw']({
            widget_div_id: 'usage-stats',
            //identifier_prefix: 'oai:digital.cic.gba.gob.ar:11746/',
            //identifier_regex: '\/handle\/[0-9\.]+\/([0-9]+)\/?', // build the identifier from the url
            //identifier_meta_field: 'citation_abstract_html_url',
            identifier:  '${this.baseIdentifierOAI}:${this.item.handle}' ,
            event_labels: {
                'view': 'Vistas',
                'download': 'Descargas',
                'outlink': 'Enlaces'
            },
            scope_labels: {
                'L': 'LA Referencia',
                'N': '${this.nodoName}',
                'R': '${this.repositoryName}'
            },
            country: '${this.countryCode}',
            national_source: 'SITEID::${this.nationalSource}',
            repository_source: 'OPENDOAR::${this.repositorySource}'
          });
        }
      }
}
