import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ConsultaOnlineService } from './consulta-online.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaOnlineResolver implements Resolve<any> {

  constructor(
    private consultaOnlineService: ConsultaOnlineService
  ) { }

  resolve() {
    return this.consultaOnlineService.getEquipeConsultaOnline();
  }
}
