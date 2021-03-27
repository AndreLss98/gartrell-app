import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { EventoComponent } from './evento/evento.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SelfImageComponent } from './self-image/self-image.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { ServicoCircleComponent } from './servico-circle/servico-circle.component';
import { WhatsappComponent } from './icons/whatsapp/whatsapp.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';

@NgModule({
  declarations: [
    PostComponent,
    EventoComponent,
    WhatsappComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
    HeaderBannerComponent,
    ServicoCircleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    EventoComponent,
    WhatsappComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
    HeaderBannerComponent,
    ServicoCircleComponent,
  ]
})
export class ComponentsModule { }
