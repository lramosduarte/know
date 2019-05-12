import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddLinkComponent } from './add-link/add-link.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { ModalAddLinkComponent } from './modal-add-link/modal-add-link.component';
import { SharedModule } from './shared/shared.module';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AddLinkComponent,
    LinkListComponent,
    LinkListItemComponent,
    MyLinksComponent,
    ModalAddLinkComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    NgbModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    ModalAddLinkComponent,
  ]
})
export class AppModule { }
