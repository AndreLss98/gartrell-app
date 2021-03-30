import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    
  }

  onMouseHover(element: HTMLElement) {
    element.classList.remove('btn-light');
    element.classList.add('btn-primary');
  }

  onMouseLeave(element: HTMLElement) {
    element.classList.remove('btn-primary');
    element.classList.add('btn-light');
  }

}
