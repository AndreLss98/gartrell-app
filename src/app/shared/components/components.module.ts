import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfImageComponent } from './self-image/self-image.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { PostComponent } from './post/post.component';
import { EventoComponent } from './evento/evento.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';

@NgModule({
  declarations: [
    PostComponent,
    EventoComponent,
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
    SelfImageComponent,
    ImageHoverComponent,
    ContatoFormComponent,
    ServicoCircleComponent,
  ]
})
export class ComponentsModule { }
