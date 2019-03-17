import { Component, OnInit } from '@angular/core';

import { AdicionadorLinksService } from '../services/gerenciador-links/adicionador-links.service';
import { Link } from '../models/link';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.sass']
})
export class AddLinkComponent implements OnInit {

  constructor(private adicionador: AdicionadorLinksService) { }

  ngOnInit() {
  }

  handlerAdiciona() {
    const link: Link = {url: 'www.google.com.br', dateAdd: new Date()};
    this.adicionador.adicionaLink(link);
    console.info(localStorage);
  }

}
