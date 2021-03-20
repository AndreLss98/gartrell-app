import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfImageComponent } from './self-image/self-image.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';

@NgModule({
  declarations: [ SelfImageComponent, ServicoCircleComponent ],
  imports: [
    CommonModule
  ],
  exports: [ SelfImageComponent ]
})
export class ComponentsModule { }
