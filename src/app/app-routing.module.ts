import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLinksComponent } from './my-links/my-links.component';


const routes: Routes = [
  {path: 'links/my', component: MyLinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
