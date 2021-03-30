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
import { SocialMediaContainerComponent } from './social-media-container/social-media-container.component';
import { SideImgContainerComponent } from './side-img-container/side-img-container.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    PostComponent,
    EventoComponent,
    WhatsappComponent,
    PaginatorComponent,
    SubHeaderComponent,
    SelfImageComponent,
    ImageHoverComponent,
    PostDetailsComponent,
    HeaderBannerComponent,
    ServicoCircleComponent,
    SideImgContainerComponent,
    SocialMediaContainerComponent,
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
    PostDetailsComponent,
    HeaderBannerComponent,
    ServicoCircleComponent,
    SideImgContainerComponent,
    SocialMediaContainerComponent,
  ]
})
export class ComponentsModule { }
