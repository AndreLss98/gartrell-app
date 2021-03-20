import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosComponent } from './servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [ ServicosComponent ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
