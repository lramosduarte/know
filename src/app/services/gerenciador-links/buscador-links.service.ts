import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Link } from 'src/app/models/link';
import { LinkStorageService } from './link-storage.service';


@Injectable({
  providedIn: 'root'
})
export class BuscadorLinksService {

  constructor(private storage: LinkStorageService) { }

  linksNaoLidos(): Observable<Link[]> {
    return this.storage.get();
  }

  todosLinks(): Observable<Link[]> {
    return this.storage.get();
  }

  private linkNaoLido(link: Link): Link {
    if (!link.dateRead) {
      return link;
    }
  }

}
