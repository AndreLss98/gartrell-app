import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'equipe', pathMatch: 'full'
  },
  { 
    path: 'equipe', component: EquipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionalRoutingModule { }
