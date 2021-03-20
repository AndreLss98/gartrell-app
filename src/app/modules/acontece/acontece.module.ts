import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AconteceComponent } from './acontece.component';
import { AconteceRoutingModule } from './acontece-routing.module';
import { EventoComponent } from 'src/app/shared/components/evento/evento.component';

@NgModule({
  declarations: [ AconteceComponent ],
  imports: [
    CommonModule,
    AconteceRoutingModule,
    ComponentsModule
  ]
})
export class AconteceModule { }
