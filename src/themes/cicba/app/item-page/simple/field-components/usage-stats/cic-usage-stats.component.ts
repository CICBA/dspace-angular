import { Component, OnInit } from '@angular/core';

/**
 * This component renders the usage-stats badge provided by La Referencia.
 */
@Component({
  selector: 'ds-cic-usage-stats',
  templateUrl: './cic-usage-stats.component.html'
})

export class CicUsageStatsComponent implements OnInit {

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
        }(window, document, 'script', 'lrw', 'parameters', 'https://cdn.jsdelivr.net/gh/lareferencia/lrw@1.1.2/dist/lrw.js'));
    }

    ngOnInit() {
        // Llamar a la función lrw una vez que se cargue el script
        if (typeof window['lrw'] === 'function') {
          window['lrw']({
            widget_div_id: 'usage-stats',
            identifier_prefix: 'oai:digital.cic.gba.gob.ar:11746/',
            identifier_regex: '\/handle\/[0-9\.]+\/([0-9]+)\/?', // build the identifier from the url
            event_labels: {
                'view': 'Vistas',
                'download': 'Descargas',
                'outlink': 'Enlaces'
            },
            scope_labels: {
                'L': 'LA Referencia',
                'N': 'SNRD',
                'R': 'CICBA'
            },
            country: 'AR',
            national_source: 'SITEID::132',
            repository_source: 'OPENDOAR::5634'
          });
        }
      }
}