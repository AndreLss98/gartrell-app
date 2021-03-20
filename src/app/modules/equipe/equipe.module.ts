import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EquipeComponent } from './equipe.component';
import { EquipeRoutingModule } from './equipe-routing.module';

@NgModule({
  declarations: [ EquipeComponent ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ComponentsModule
  ]
})
export class EquipeModule { }
