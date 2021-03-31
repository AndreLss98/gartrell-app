import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SociedadeService {

  private _posts: any[] = []

  constructor() { }

  public getPosts() {
    return of(this.posts);
  }

  public get posts(): any[] {
    return this._posts;
  }

  public set posts(value: any[]) {
    this._posts = value;
  }
}
