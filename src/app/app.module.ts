import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';
import { MyLinksComponent } from './my-links/my-links.component';


@NgModule({
  declarations: [
    AppComponent,
    AddLinkComponent,
    LinkListComponent,
    LinkListItemComponent,
    MyLinksComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,

    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
