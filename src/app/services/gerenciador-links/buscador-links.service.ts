import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Link } from 'src/app/models/link';

import { LinkStorageService } from './link-storage.service';


@Injectable({
  providedIn: 'root',
})
export class BuscadorLinksService {
  private linksSendoAtualizados = new Subject<Link[]>();

  linksAtualizados$ = this.linksSendoAtualizados.asObservable();

  constructor(
    private storage: LinkStorageService,
  ) { }

  todosLinks() {
    this.storage.busca().subscribe(
      dados => {
        const links : Link[] = this.mapearDadosParaLink(dados);
        this.linksSendoAtualizados.next(links);
      });
  }

  private mapearDadosParaLink(dados): Link[] {
    return dados.map(e => {
      return {...e.payload.doc.data()} as Link;
    });
  }

}
