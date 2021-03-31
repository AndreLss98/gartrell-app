import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AconteceComponent } from './acontece.component';
import { AconteceRoutingModule } from './acontece-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [ AconteceComponent, EventDetailsComponent ],
  imports: [
    CommonModule,
    AconteceRoutingModule,
    ComponentsModule
  ]
})
export class AconteceModule { }
