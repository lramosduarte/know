import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AdicionadorLinksService } from 'src/app/services/gerenciador-links/adicionador-links.service';
import { fromURL, Link } from 'src/app/models/link';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.sass']
})
export class AddLinkComponent implements OnInit {
  adicionarLinkForm = new FormGroup({
    url: new FormControl(null, [
      Validators.required,

    ])
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
