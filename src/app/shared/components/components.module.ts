import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { EventoComponent } from './evento/evento.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SelfImageComponent } from './self-image/self-image.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';

@NgModule({
  declarations: [
    PostComponent,
    EventoComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
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
    ServicoCircleComponent,
  ]
})
export class ComponentsModule { }
