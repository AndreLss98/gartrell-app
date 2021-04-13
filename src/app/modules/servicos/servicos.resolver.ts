import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ServicosService } from './servicos.service';

@Injectable({
  providedIn: 'root'
})
export class ServicosResolver implements Resolve<any> {

  constructor(private sevicosService: ServicosService) { }

  resolve() {
    return this.sevicosService.getAll();
  }
}
