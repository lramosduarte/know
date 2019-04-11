import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddLinkComponent } from './add-link/add-link.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { ModalAddLinkComponent } from './modal-add-link/modal-add-link.component';
import { SharedModule } from './shared/shared.module';


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
    BrowserModule,
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
