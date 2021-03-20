import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  // { 
  //   path: 'identidade-nominal', component: COMPONENT
  // },
  // { 
  //   path: 'quem-somos', component: COMPONENT
  // },
  { 
    path: 'equipe', component: EquipeComponent
  },
  // { 
  //   path: 'galeria-fotos', component: COMPONENT
  // },
  // { 
  //   path: 'links-uteis', component: COMPONENT
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionalRoutingModule { }
