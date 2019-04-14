import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Link } from '../models/link';


@Component({
  selector: 'app-link-list-item',
  templateUrl: './link-list-item.component.html',
  styleUrls: ['./link-list-item.component.sass']
})
export class LinkListItemComponent implements OnInit {
  linkSelecionado: boolean = false;
  @Input() link: Link;
  @Output() clicarLink: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    this.linkSelecionado = true;
    this.clicarLink.emit(this.link.url);
  }

  get linkNovo(): boolean {
    const agora = new Date().getTime();
    const umDia = 1000 * 60 * 60 * 24;
    const ontem = agora - umDia;
    return this.link.dateAdd.seconds > ontem;
  }

  get exibirNome(): string {
    if (this.link.name) {
      return this.link.name;
    }
    return this.link.url;
  }

}
