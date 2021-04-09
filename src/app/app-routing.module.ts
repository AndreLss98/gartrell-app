import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcontecimentosResolver } from './modules/acontece/acontecimentos-resolver';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    resolve: {
      acontecimentos: AcontecimentosResolver
    }
  },
  {
    path: 'servicos',
    loadChildren: () => import('./modules/servicos/servicos.module').then(m => m.HomeModule)
  },
  {
    path: 'acontece',
    loadChildren: () => import('./modules/acontece/acontece.module').then(m => m.AconteceModule)
  },
  {
    path: 'reflexoes',
    loadChildren: () => import('./modules/reflexoes/reflexoes.module').then(m => m.ReflexoesModule)
  },
  {
    path: 'institucional',
    loadChildren: () => import('./modules/institucional/institucional.module').then(m => m.InstitucionalModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./modules/noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path:"fique-por-dentro",
    loadChildren: () => import('./modules/fique-por-dentro/fique-por-dentro.module').then(m => m.FiquePorDentroModule)
  },
  {
    path:"consulte-conosco",
    loadChildren: () => import('./modules/terapia-online/terapia-online.module').then(m => m.TerapiaOnlineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
