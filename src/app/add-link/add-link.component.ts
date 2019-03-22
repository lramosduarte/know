import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AdicionadorLinksService } from 'src/app/services/gerenciador-links/adicionador-links.service';
import { Link } from 'src/app/models/link';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.sass']
})
export class AddLinkComponent implements OnInit {
  url = new FormControl(null, [
    Validators.required,
    // TODO: adicionar validação de url
  ]);
  @Output() cadastraNovoLink: EventEmitter<null> = new EventEmitter();

  constructor(private adicionador: AdicionadorLinksService) { }

  ngOnInit() {
  }

  handlerAdiciona() {
    const link = new Link(this.url.value);
    this.adicionador.adicionaLink(link);
    this.cadastraNovoLink.emit();
    this.limpaForm();
  }

  private limpaForm() {
    this.url.reset()
  }

}
