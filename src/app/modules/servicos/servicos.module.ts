import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { ServicosComponent } from './servicos.component';

@NgModule({
  declarations: [ServicosComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicosRoutingModule
  ]
})
export class HomeModule { }
