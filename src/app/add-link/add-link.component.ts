import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { fromURL } from 'src/app/models/link';
import { AdicionadorLinksService } from 'src/app/services/gerenciador-links/adicionador-links.service';
import { URLDisponivelValidator } from 'src/app/shared/validators/urls.directive';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.sass']
})
export class AddLinkComponent implements OnInit {
  private PROTOCOLO = '((https|http):\\/\\/)';
  private CORPO_URL = '(\\w+)\\.([a-zA-Z]+\\.?\\/?)+.*';
  private PATTERN_VALIDAR_URL = new RegExp(`${this.PROTOCOLO}${this.CORPO_URL}`);

  adicionarLinkForm = new FormGroup({
    url: new FormControl(
      null, [
      Validators.required,
      Validators.pattern(this.PATTERN_VALIDAR_URL)
      ], [URLDisponivelValidator()]
    )
  });

  constructor(
    private adicionador: AdicionadorLinksService,
  ) { }

  ngOnInit() {
  }

  get errosFormulario() {
    return Object.keys(this.adicionarLinkForm.controls).map(
      nomeControl => this.adicionarLinkForm.controls[nomeControl].errors
    );
  }

  handleAdiciona() {
    const link = fromURL(this.adicionarLinkForm.get('url').value);
    this.adicionador.adicionaLink(link);
    this.handleLimpaForm();
  }

  handleLimpaForm() {
    this.adicionarLinkForm.reset();
  }

}
