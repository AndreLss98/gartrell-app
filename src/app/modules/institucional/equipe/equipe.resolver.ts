import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EquipeService } from './equipe.service';

@Injectable({
  providedIn: 'root'
})
export class EquipeResolver implements Resolve<any> {

  constructor(
    private equipeService: EquipeService
  ) { }

  resolve() {
    return this.equipeService.getTodosMembros();
  }
}
