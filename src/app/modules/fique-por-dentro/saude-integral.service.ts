import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaudeIntegralService {

  private _posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(pageNumber: number) {
    const params = new HttpParams().append('pagina', pageNumber.toString());
    return this.http.get(`${environment.wpBaseUrl}/postssaudeintegral`, { params });
  }

  public get posts(): Post[] {
    return this._posts;
  }

  public set posts(value: Post[]) {
    this._posts = value;
  }
}
