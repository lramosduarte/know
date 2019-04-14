import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { Link, toObject } from 'src/app/models/link';


@Injectable({
  providedIn: 'root',
})
export class LinkStorageService {
  private KEY_LINKS_STORE = 'links';

  links: Link[];

  constructor(
    private firebase: AngularFirestore,
  ) { }

  adiciona(link: Link): void {
    this.firebase.collection(`${this.KEY_LINKS_STORE}/`).add(toObject(link));
  }

  busca(): Observable<any> {
    return this.firebase.collection(this.KEY_LINKS_STORE).snapshotChanges();
  }

}
