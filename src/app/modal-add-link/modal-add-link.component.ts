import { Component, OnInit, ViewChild } from '@angular/core';
import { AddLinkComponent } from '../add-link/add-link.component';
import { ModalComponent } from '../shared/modal/modal.component';


@Component({
  selector: 'app-modal-add-link',
  templateUrl: './modal-add-link.component.html',
  styleUrls: ['./modal-add-link.component.scss']
})
export class ModalAddLinkComponent implements OnInit {
  @ViewChild(AddLinkComponent) addLinkComponent: AddLinkComponent;
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit() {
    this.modal.fechar.subscribe(
      () => this.addLinkComponent.handlerAdiciona());
  }

}
