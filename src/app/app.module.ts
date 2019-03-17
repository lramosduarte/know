import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    AddLinkComponent,
    LinkListItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
