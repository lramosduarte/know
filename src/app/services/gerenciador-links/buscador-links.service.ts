import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Link } from 'src/app/models/link';
import { LINKS } from 'src/app/services/gerenciador-links/mock';


@Injectable({
  providedIn: 'root'
})
export class BuscadorLinksService {

  constructor() { }

  linksNaoLidos(): Observable<Link[]> {
    return of(LINKS);
  }

}
