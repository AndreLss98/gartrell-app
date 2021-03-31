import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { AconteceService } from './acontece.service';

@Injectable({
  providedIn: 'root'
})
export class AconteceResolver implements Resolve<any> {

  constructor(
    private aconteceService: AconteceService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id: any = route.paramMap.get('id');
    id = parseInt(id);
    return this.aconteceService.getEventoById(id);
  }
}
