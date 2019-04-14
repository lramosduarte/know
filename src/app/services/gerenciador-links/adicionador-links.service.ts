import { Injectable } from '@angular/core';

import { Link } from 'src/app/models/link';
import { LinkStorageService } from './link-storage.service';


@Injectable({
  providedIn: 'root',
})
export class AdicionadorLinksService {

  constructor(
    private storage: LinkStorageService,
  ) { }

  adicionaLink(link: Link): void {
    this.storage.adiciona(link);
  }

}
