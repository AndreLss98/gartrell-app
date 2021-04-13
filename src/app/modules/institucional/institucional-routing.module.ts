import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipeComponent } from './equipe/equipe.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import {IdentidadeNominalComponent}from './identidade-nominal/identidade-nominal.component'

import { GaleriaFotosResolver } from './galeria-fotos/galeria-fotos.resolver';
import { GaleriaDetailsResolver } from './galeria-fotos/galeria-details/galeria-details.resolver';
import { GaleriaDetailsComponent } from './galeria-fotos/galeria-details/galeria-details.component';

import { QuemSomosContentResolver } from './quem-somos/quem-somos-content.resolver';
import { IdentidadeNominalResolver } from './identidade-nominal/identidade-nominal.resolver';
import { EquipeResolver } from './equipe/equipe.resolver';
import { LinksUteisComponent } from './links-uteis/links-uteis.component';

const routes: Routes = [
  { 
    path: 'identidade-nominal', component: IdentidadeNominalComponent,
    resolve: {
      content: IdentidadeNominalResolver
    }
  },
  { 
    path: 'quem-somos', component: QuemSomosComponent,
    resolve: {
      content: QuemSomosContentResolver
    }
  },
  { 
    path: 'equipe', component: EquipeComponent,
    resolve: {
      membros: EquipeResolver
    }
  },
  { 
    path: 'galeria-fotos', component: GaleriaFotosComponent,
    resolve: {
      galerias: GaleriaFotosResolver
    }
  },
  { 
    path: 'galeria-fotos/:id', component: GaleriaDetailsComponent,
    resolve: {
      galeria: GaleriaDetailsResolver
    }
  },
  { 
    path: 'links-uteis', component: LinksUteisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionalRoutingModule { }
