import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Membro } from 'src/app/shared/models/membro.model';
import { environment } from 'src/environments/environment';

interface Membros {
  equipe: Membro[];
  parceiros: Membro[];
}

@Injectable({
  providedIn: 'root'
})
export class ConsultaOnlineService {

  private _membros: Membros;

  private _equipe: Membro[] = [];
  private _parceiros: Membro[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getEquipeConsultaOnline() {
    const params = new HttpParams().append('realiza_consulta', '1');
    return this.http.get(`${environment.wpBaseUrl}/equipe`, { params });
  }

  public get membros(): Membros {
    return this._membros;
  }
  public set membros(value: Membros) {
    this._membros = value;

    this.equipe = value.equipe;
    this.parceiros = value.parceiros;
  }

  public get equipe(): Membro[] {
    return this._equipe;
  }
  public set equipe(value: Membro[]) {
    this._equipe = value;
  }

  public get parceiros(): Membro[] {
    return this._parceiros;
  }
  public set parceiros(value: Membro[]) {
    this._parceiros = value;
  }
}
