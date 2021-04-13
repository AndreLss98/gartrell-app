import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Acontecimento } from '../../shared/models/acontece.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AconteceService {

  private _eventos: Acontecimento[] = [];

  constructor(private http: HttpClient) {

  }

  public getEventos(pageNumber: number) {
    const params = new HttpParams().append('pagina', pageNumber.toString())
    return this.http.get(`${environment.wpBaseUrl}/acontece`, { params });
  }

  public getEventoById(id: number) {
    return this.http.get(`${environment.wpBaseUrl}/acontece/${id}`);
  }

  public get eventos(): any[] {
    return this._eventos;
  }

  public set eventos(value: any[]) {
    this._eventos = value;
  }
}
