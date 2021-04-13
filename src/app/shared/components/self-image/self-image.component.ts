import { Sexo } from './../../enums/sexo.enum';
import { Component, Input, OnInit } from '@angular/core';

const DEFAULT_MAN = 'assets/avatar_man.png';
const DEFAULT_WOMAN = 'assets/avatar_woman.png';

@Component({
  selector: 'app-self-image',
  templateUrl: './self-image.component.html',
  styleUrls: ['./self-image.component.scss']
})
export class SelfImageComponent implements OnInit {

  @Input('url')
  public _imageUrl: string = '';
  
  @Input('sexo')
  public _sexo: Sexo;
  
  constructor() { }

  ngOnInit(): void {
    if(!this.imageUrl) {
      this.imageUrl = this.sexo == Sexo.Masculino? DEFAULT_MAN : DEFAULT_WOMAN;
    }
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  public get sexo(): Sexo {
    return this._sexo;
  }

  public set sexo(value: Sexo) {
    this._sexo = value;
  }
}
