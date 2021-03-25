import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { EventoComponent } from './evento/evento.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SelfImageComponent } from './self-image/self-image.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    PostComponent,
    EventoComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
    ContatoFormComponent,
    ServicoCircleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    EventoComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
    ContatoFormComponent,
    ServicoCircleComponent,
  ]
})
export class ComponentsModule { }
