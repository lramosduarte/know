import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Link } from 'src/app/models/link';
import { LinkStorageService } from './link-storage.service';


@Injectable({
  providedIn: 'root'
})
export class BuscadorLinksService {

  constructor() { }

  linksNaoLidos(): Observable<Link[]> {
    const storage = new LinkStorageService();
    const linksNaoLidos = storage.get().filter(this.linkNaoLido);
    return of(linksNaoLidos);
  }

  todosLinks(): Observable<Link[]> {
    const storage = new LinkStorageService();
    return of(storage.get());
  }

  private linkNaoLido(link: Link): Link {
    if (!link.dateRead) {
      return link;
    }
  }

}
