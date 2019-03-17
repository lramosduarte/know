import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkListComponent } from './link-list/link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent
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
