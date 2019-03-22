import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../models/link';


@Component({
  selector: 'app-link-list-item',
  templateUrl: './link-list-item.component.html',
  styleUrls: ['./link-list-item.component.sass']
})
export class LinkListItemComponent implements OnInit {

  @Input() link: Link;

  constructor() { }

  ngOnInit() {
  }

  get linkNovo() {
    const agora = new Date().getTime();
    const umDia = 1000 * 60 * 60 * 24;
    const ontem = agora - umDia;
    return this.link.dateAdd.getTime() > ontem;
  }

  get exibirNome() {
    if (this.link.name) {
      return this.link.name;
    }
    return this.link.url;
  }

}
