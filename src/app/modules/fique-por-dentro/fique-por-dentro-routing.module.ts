import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiquePorDentroComponent } from './fique-por-dentro.component';

import { PostsDesenvolvimentoHumanoResolver } from './posts-desenvolvimento-humano.resolver';
import { PostsSaudeIntegralResolver } from './posts-saude-integral.resolver';
import { PostsSociedadeResolver } from './posts-sociedade.resolver';

const routes: Routes = [
  {
    path: ':item',
    component: FiquePorDentroComponent,
    resolve: {
      sociedadePosts: PostsSociedadeResolver,
      saudeIntegralPosts: PostsSaudeIntegralResolver,
      desenvolvimentoHumanoPosts: PostsDesenvolvimentoHumanoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiquePorDentroRoutingModule { }
