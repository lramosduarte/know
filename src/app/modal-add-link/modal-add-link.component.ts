import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { AddLinkComponent } from 'src/app/add-link/add-link.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';


@Component({
  selector: 'app-modal-add-link',
  templateUrl: './modal-add-link.component.html',
  styleUrls: ['./modal-add-link.component.scss']
})
export class  ModalAddLinkComponent implements OnInit {
  erros: ValidationErrors = null;

  @ViewChild(AddLinkComponent) addLinkComponent: AddLinkComponent;
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit() {
    this.addLinkComponent.adicionarLinkForm.statusChanges.subscribe(
      status => this.validaFormulario(status));
    this.modal.fechar.subscribe(
      () => this.addLinkComponent.handleAdiciona());
  }

  private validaFormulario(status: string): void {
    const formInvalido = status !== 'VALID';
    this.modal.confimarDesabilitado = formInvalido;
    if (formInvalido) {
      this.erros = this.addLinkComponent.errosFormulario;
    }
  }

}
