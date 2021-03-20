import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EquipeComponent } from './equipe/equipe.component';
import { InstitucionalRoutingModule } from './institucional-routing.module';

@NgModule({
  declarations: [ EquipeComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule { }
