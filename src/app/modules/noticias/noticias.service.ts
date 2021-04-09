import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Post } from 'src/app/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private _noticias: Post[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public getNoticias(pageNumber: number) {
    const params = new HttpParams().append('pagina', pageNumber.toString());
    return this.http.get(`${environment.wpBaseUrl}/noticia`, { params });
  }

  public get noticias(): Post[] {
    return this._noticias;
  }

  public set noticias(value: Post[]) {
    this._noticias = value;
  }
}
