import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrDatePipe } from './br-date.pipe';
import { HtmlFilterPipe } from './html-filter.pipe';

@NgModule({
  declarations: [ BrDatePipe, HtmlFilterPipe ],
  imports: [
    CommonModule
  ],
  exports: [ BrDatePipe, HtmlFilterPipe ]
})
export class PipesModule { }
