import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { AconteceService } from './acontece.service';

@Injectable({
  providedIn: 'root'
})
export class AcontecimentosResolver implements Resolve<any> {

  constructor(
    private aconteceService: AconteceService
  ) { }

  resolve() {
    return this.aconteceService.getEventos(1);
  }
}
