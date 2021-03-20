import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfImageComponent } from './self-image/self-image.component';

@NgModule({
  declarations: [ SelfImageComponent ],
  imports: [
    CommonModule
  ],
  exports: [ SelfImageComponent ]
})
export class ComponentsModule { }
