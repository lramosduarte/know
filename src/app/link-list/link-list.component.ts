import { Component, OnInit } from '@angular/core';

import { Link } from 'src/app/models/link';
import { BuscadorLinksService } from 'src/app/services/gerenciador-links/buscador-links.service';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.sass']
})
export class LinkListComponent implements OnInit {
  linksNaoLidos: Link[];

  constructor(private buscador: BuscadorLinksService) { }

  ngOnInit() {
    this.atualizaListaLinks();
  }

  public atualizaListaLinks() {
    this.buscador.linksNaoLidos()
      .subscribe(links => this.linksNaoLidos = links);
  }


}
