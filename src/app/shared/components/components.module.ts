import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfImageComponent } from './self-image/self-image.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

@NgModule({
  declarations: [ SelfImageComponent, ServicoCircleComponent, ContatoFormComponent ],
  imports: [
    CommonModule
  ],
  exports: [ SelfImageComponent, ServicoCircleComponent, ContatoFormComponent ]
})
export class ComponentsModule { }
