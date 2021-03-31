import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEstados() {
    return this.http.get<any>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}
