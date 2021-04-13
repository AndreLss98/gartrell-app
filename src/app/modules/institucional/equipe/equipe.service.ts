import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Membro } from 'src/app/shared/models/membro.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private _equipe: Membro[] = [];
  private _parceiros: Membro[] = [];

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
}
