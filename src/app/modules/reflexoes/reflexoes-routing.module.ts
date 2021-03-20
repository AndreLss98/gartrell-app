import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReflexoesComponent } from './reflexoes.component';



const routes: Routes = [
  { path: '', component: ReflexoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReflexoesRoutingModule { }
