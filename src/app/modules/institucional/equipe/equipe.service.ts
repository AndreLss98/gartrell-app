import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Membro } from 'src/app/shared/models/membro.model';
import { environment } from 'src/environments/environment';

interface Membros {
  equipe: Membro[],
  parceiros: Membro[]
}

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private _equipe: Membro[] = [];
  private _parceiros: Membro[] = [];
  private _membros: Membros;

  constructor(
    private http: HttpClient
  ) { }

  public getTodosMembros() {
    return this.http.get(`${environment.wpBaseUrl}/equipe`);
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

  public get membros(): Membros {
    return this._membros;
  }
  public set membros(value: Membros) {
    this._membros = value;

    this.equipe = value.equipe;
    this.parceiros = value.parceiros;
  }
}
