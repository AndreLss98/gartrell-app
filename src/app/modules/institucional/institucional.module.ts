import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EquipeComponent } from './equipe/equipe.component';
import { InstitucionalRoutingModule } from './institucional-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { IdentidadeNominalComponent } from './identidade-nominal/identidade-nominal.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { GaleriaDetailsComponent } from './galeria-fotos/galeria-details/galeria-details.component';
import { LinksUteisComponent } from './links-uteis/links-uteis.component';

@NgModule({
  declarations: [ EquipeComponent, QuemSomosComponent, IdentidadeNominalComponent, GaleriaFotosComponent, GaleriaDetailsComponent, LinksUteisComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    InstitucionalRoutingModule,
    PipesModule
  ]
})
export class InstitucionalModule { }
