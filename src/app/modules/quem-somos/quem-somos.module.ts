import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    ComponentsModule
  ]
})
export class QuemSomosModule { }
