import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LinkListComponent } from '../link-list/link-list.component';
import { ModalAddLinkComponent } from '../modal-add-link/modal-add-link.component';


@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.sass']
})
export class MyLinksComponent implements OnInit {
  @ViewChild(LinkListComponent) linkList: LinkListComponent;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public onAdicionarNovoLink(): void {
    this.linkList.atualizaListaLinks();
  }

  carregarModal(): void {
    const modal = this.modalService.open(ModalAddLinkComponent);
    modal.result.then(() => this.linkList.atualizaListaLinks());
  }

}
