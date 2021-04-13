import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  public post: Post;

  @Input()
  public titulo: string = '';

  @Input()
  public resumo: string = '';

  @Input()
  public autor: string = '';

  @Input()
  public dataPost: Date = new Date();

  @Input()
  public banner: string = '';

  @Input()
  public callFunction: any;

  @Input()
  public categoria: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.configResumoContent();
    }, 200);
  }

  onMouseHover(element: HTMLElement) {
    element.classList.remove('btn-light');
    element.classList.add('btn-primary');
  }

  onMouseLeave(element: HTMLElement) {
    element.classList.remove('btn-primary');
    element.classList.add('btn-light');
  }

  public configResumoContent() {
    const resumoContent = document.getElementById(`postResumo${this.post.id}`);
    if (resumoContent) resumoContent.innerHTML = this.post.resumo;
  }

}
