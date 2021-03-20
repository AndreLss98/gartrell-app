import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hover',
  templateUrl: './image-hover.component.html',
  styleUrls: ['./image-hover.component.scss']
})
export class ImageHoverComponent implements OnInit {

  @Input()
  public titulo: string = '';

  @Input()
  public subTitulo: string = '';

  @Input()
  public bgImg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
