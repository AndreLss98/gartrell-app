import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { ReflexoesService } from './reflexoes.service';

@Injectable({
  providedIn: 'root'
})
export class ReflexoesResolver implements Resolve<any> {

  constructor(
    private reflexoesService: ReflexoesService
  ) { }

  resolve() {
    return this.reflexoesService.getReflexoes(1);
  }
}
