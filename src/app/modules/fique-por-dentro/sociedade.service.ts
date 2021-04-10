import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SociedadeService {

  private _posts: Post[] = [];

  constructor() { }

  public getPosts() {
    return of(this.posts);
  }

  public get posts(): Post[] {
    return this._posts;
  }

  public set posts(value: Post[]) {
    this._posts = value;
  }
}
