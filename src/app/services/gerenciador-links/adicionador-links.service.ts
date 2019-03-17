import { Injectable } from '@angular/core';

import { Link } from 'src/app/models/link';
import { LinkStorageService } from './link-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdicionadorLinksService {

  constructor() {

  }

  adicionaLink(link: Link): void {
    new LinkStorageService().adiciona(link);
  }

}
