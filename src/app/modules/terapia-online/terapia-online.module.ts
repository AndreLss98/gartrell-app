import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TerapiaOnlineComponent } from './terapia-online.component';
import { TerapiaOnlineRoutingModule } from './terapia-online-routing.module';



@NgModule({
    declarations: [TerapiaOnlineComponent],
    imports: [
        CommonModule,
        TerapiaOnlineRoutingModule,
        ComponentsModule
    ]
})
export class TerapiaOnlineModule {
}
