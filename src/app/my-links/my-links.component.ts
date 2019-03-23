import { Component, OnInit, ViewChild } from '@angular/core';
import { LinkListComponent } from '../link-list/link-list.component';

@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.sass']
})
export class MyLinksComponent implements OnInit {
  @ViewChild(LinkListComponent) linkList: LinkListComponent;

  constructor() { }

  ngOnInit() {
  }

  public onAdicionarNovoLink() {
    this.linkList.atualizaListaLinks();
  }

}
