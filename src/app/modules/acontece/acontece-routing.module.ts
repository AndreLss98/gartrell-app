import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AconteceComponent } from './acontece.component';

const routes: Routes = [
  { path: '', component: AconteceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AconteceRoutingModule { }
