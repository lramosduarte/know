import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LinkListComponent} from 'src/app/link-list/link-list.component';


const routes: Routes = [
  {path: 'links', component: LinkListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
