import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PsiquiatriaComponent } from './psiquiatria/psiquiatria.component';

const routes: Routes = [
  { 
    path: 'psiquiatria', component: PsiquiatriaComponent
  },
  // { 
  //   path: 'psicologia', component: COMPONENT
  // },
  // { 
  //   path: 'neuropsicologia', component: EquipeComponent
  //  }
  // { 
  //   path: 'grupo-suporte-crescimento-pessoal', component: COMPONENT
  // },
  // { 
  //   path: 'capacitacoes', component: COMPONENT
  // },
  // { 
  //   path: 'consultoria', component: COMPONENT
  // },
  // { 
  //   path: 'parceria-acordos', component: COMPONENT
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
