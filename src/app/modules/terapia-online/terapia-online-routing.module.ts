import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerapiaOnlineComponent } from './terapia-online.component';



const routes: Routes = [
  { path: '', component: TerapiaOnlineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapiaOnlineRoutingModule { }
