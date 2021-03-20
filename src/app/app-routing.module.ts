import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "servico",
    loadChildren: () => import('./modules/servicos/servicos.module').then(m => m.HomeModule)
  },
  {
    path: "acontece",
    loadChildren: () => import('./modules/acontece/acontece.module').then(m => m.AconteceModule)
  },
  {
    path: "reflexoes",
    loadChildren: () => import('./modules/reflexoes/reflexoes.module').then(m => m.ReflexoesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
