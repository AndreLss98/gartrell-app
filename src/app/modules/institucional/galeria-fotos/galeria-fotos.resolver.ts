import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { GaleriaFotosService } from './galeria-fotos.service';

@Injectable({
  providedIn: 'root'
})
export class GaleriaFotosResolver implements Resolve<any> {

  constructor(
    private galeriaFotosService: GaleriaFotosService
  ) { }

  resolve() {
    return this.galeriaFotosService.getAll(1);
  }
}
