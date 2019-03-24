import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Link } from 'src/app/models/link';
import { BuscadorLinksService } from 'src/app/services/gerenciador-links/buscador-links.service';
import { LinkListItemComponent } from '../link-list-item/link-list-item.component';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.sass']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [];
  @ViewChildren(LinkListItemComponent) itens: QueryList<LinkListItemComponent>;

  constructor(private buscador: BuscadorLinksService) { }

  ngOnInit() {
    this.atualizaListaLinks();
  }

  public atualizaListaLinks() {
    this.buscador.linksNaoLidos()
      .subscribe(links => this.links = links);
  }

  public handleSelecionaLink(url: string) {
    this.itens.forEach(item => {
      if (item.link.url != url) {
        item.linkSelecionado = false;
      }
    })
  }

}
