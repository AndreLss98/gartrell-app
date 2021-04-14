import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  private _post: Post;

  constructor() { }

  ngOnInit(): void {

  }

  public get post(): Post {
    return this._post;
  }

  @Input('post')
  public set post(value: Post) {
    this._post = value;

    setTimeout(() => {
      this.configContent();
    }, 200);
  }

  public configContent() {
    const contentContainer = document.getElementById(`postDetail-${this.post.id}`);
    if (contentContainer) contentContainer.innerHTML = this.post.conteudo;
  }

}
