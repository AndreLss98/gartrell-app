import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-image-hover',
  templateUrl: './image-hover.component.html',
  styleUrls: ['./image-hover.component.scss']
})
export class ImageHoverComponent implements OnInit {

  @Input()
  public post: Post;

  constructor() { }

  ngOnInit(): void {

  }

  public configResumo() {
    const resumoContent = document.getElementById(`imgHoverResumo-${this.post.id}`);
    if (resumoContent) resumoContent.innerHTML = this.post.resumo;
  }

}
