import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TerapiaOnlineComponent } from './terapia-online.component';
import { TerapiaOnlineRoutingModule } from './terapia-online-routing.module';
import { MembroConsultaOnlineComponent } from './membro-consulta-online/membro-consulta-online.component';



@NgModule({
    declarations: [TerapiaOnlineComponent, MembroConsultaOnlineComponent],
    imports: [
        CommonModule,
        TerapiaOnlineRoutingModule,
        ComponentsModule
    ]
})
export class TerapiaOnlineModule {
}
