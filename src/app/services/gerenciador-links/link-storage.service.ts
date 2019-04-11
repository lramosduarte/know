import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Link } from 'src/app/models/link';


@Injectable({
  providedIn: 'root',
})
export class LinkStorageService {
  private KEY_LINKS_STORE = 'links';

  links: Link[];

  constructor() {
    this.iniciaStore();
    this.carregaDados();
  }

  adiciona(link: Link) {
    const links = this.links || [];
    links.push(link);
    localStorage.setItem(this.KEY_LINKS_STORE, JSON.stringify(links));
  }

  get(): Observable<Link[]> {
    this.carregaDados();
    return of(this.links);
  }

  private carregaDados() {
    this.links = JSON.parse(localStorage.getItem(this.KEY_LINKS_STORE), (k, v) => {
      if (k === 'dateAdd' || k == 'dateRead' && v) {
        return new Date(v);
      }
      return v;
    });
  }

  private iniciaStore() {
    if (!localStorage.getItem(this.KEY_LINKS_STORE)) {
      localStorage.setItem(this.KEY_LINKS_STORE, JSON.stringify([]));
    }
  }

}
