import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GaleriaFotosService } from '../galeria-fotos.service';

@Injectable({
  providedIn: 'root'
})
export class GaleriaDetailsResolver implements Resolve<any> {

  constructor(private galeriaFotosService: GaleriaFotosService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id: any = route.paramMap.get('id');
    id = parseInt(id);
    return this.galeriaFotosService.getById(id);
  }
}
