import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { QuemSomosService } from './quem-somos.service';

@Injectable({
  providedIn: 'root'
})
export class QuemSomosContentResolver implements Resolve<any> {

  constructor(
    private quemSomosService: QuemSomosService
  ) { }

  resolve() {
    return this.quemSomosService.getContent();
  }
}
