import { Component, OnInit } from '@angular/core';

import { Link } from 'src/app/models/link';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.sass']
})
export class LinkListComponent implements OnInit {
  linksNaoLidos: Link[];

  constructor() { }

  ngOnInit() {
  }

}
