import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-image',
  templateUrl: './self-image.component.html',
  styleUrls: ['./self-image.component.scss']
})
export class SelfImageComponent implements OnInit {

  @Input('url')
  public _imageUrl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

}
