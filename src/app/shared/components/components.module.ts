import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfImageComponent } from './self-image/self-image.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { EventoComponent } from './evento/evento.component';

@NgModule({
  declarations: [ SelfImageComponent, ServicoCircleComponent, ContatoFormComponent, EventoComponent ],
  imports: [
    CommonModule
  ],
  exports: [ SelfImageComponent, ServicoCircleComponent, ContatoFormComponent, EventoComponent ]
})
export class ComponentsModule { }
