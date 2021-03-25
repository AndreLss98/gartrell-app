import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiquePorDentroComponent } from './fique-por-dentro.component';

import { FiquePorDentroRoutingModule } from './fique-por-dentro-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ FiquePorDentroComponent ],
  imports: [
    CommonModule,
    FiquePorDentroRoutingModule,
    ComponentsModule
  ]
})
export class FiquePorDentroModule { }
