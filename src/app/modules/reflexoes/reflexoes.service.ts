import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReflexoesService {

  private _reflexoes: Post[] = [];
  private _selectedReflection: Post;

  constructor(
    private http: HttpClient
  ) { }

  public getReflexoes(pageNumber: number) {
    const params = new HttpParams().append('pagina', pageNumber.toString());
    return this.http.get(`${environment.wpBaseUrl}/reflexao`, { params });
  }

  public get reflexoes(): Post[] {
    return this._reflexoes;
  }
  public set reflexoes(value: Post[]) {
    this._reflexoes = value;
  }

  public get selectedReflection(): Post {
    return this._selectedReflection;
  }
  public set selectedReflection(value: Post) {
    this._selectedReflection = value;
  }
}
