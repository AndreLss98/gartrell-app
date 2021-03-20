import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EquipeComponent } from './equipe/equipe.component';
import { InstitucionalRoutingModule } from './institucional-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

@NgModule({
  declarations: [ EquipeComponent, QuemSomosComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule { }
