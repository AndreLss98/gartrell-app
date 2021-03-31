import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AconteceResolver } from './acontece-resolver';

import { AconteceComponent } from './acontece.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: AconteceComponent },
  {
    path: 'details/:id',
    component: EventDetailsComponent,
    resolve: {
      evento: AconteceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AconteceRoutingModule { }
