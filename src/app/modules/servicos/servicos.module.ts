import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosComponent } from './servicos.component';

import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  declarations: [ ServicosComponent ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class HomeModule { }
