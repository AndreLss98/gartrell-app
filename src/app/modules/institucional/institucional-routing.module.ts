import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import {IdentidadeNominalComponent}from './identidade-nominal/identidade-nominal.component'

const routes: Routes = [
  { 
    path: 'identidade-nominal', component: IdentidadeNominalComponent
  },
  { 
    path: 'quem-somos', component: QuemSomosComponent
  },
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
