import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ReflexoesComponent } from './reflexoes.component';
import { ReflexoesRoutingModule } from './reflexoes-routing.module';



@NgModule({
    declarations: [ReflexoesComponent],
    imports: [
        CommonModule,
        ReflexoesRoutingModule,
        ComponentsModule
    ]
})
export class ReflexoesModule {
}
