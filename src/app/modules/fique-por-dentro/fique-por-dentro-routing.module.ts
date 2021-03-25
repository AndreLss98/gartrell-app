import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiquePorDentroComponent } from './fique-por-dentro.component';

const routes: Routes = [
  { path: ':item', component: FiquePorDentroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiquePorDentroRoutingModule { }
