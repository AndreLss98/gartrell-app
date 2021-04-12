import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrDatePipe } from './br-date.pipe';

@NgModule({
  declarations: [ BrDatePipe ],
  imports: [
    CommonModule
  ],
  exports: [ BrDatePipe ]
})
export class PipesModule { }
