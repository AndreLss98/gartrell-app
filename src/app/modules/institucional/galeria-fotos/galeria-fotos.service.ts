import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Galeria } from 'src/app/models/galeria-foto.model';

@Injectable({
  providedIn: 'root'
})
export class GaleriaFotosService {

  private _galerias: Galeria[] = [];

  constructor(private http: HttpClient) { }

  public getAll(pageNumber: number) {
    const params =  new HttpParams().append('pagina', pageNumber.toString()).append('qtdPagina', '6');
    return this.http.get(`${environment.wpBaseUrl}/galeria`, { params });
  }

  public getById(id: number) {
    return this.http.get(`${environment.wpBaseUrl}/galeria/${id}`);
  }

  public get galerias(): Galeria[] {
    return this._galerias;
  }
  public set galerias(value: Galeria[]) {
    this._galerias = value;
  }
}
