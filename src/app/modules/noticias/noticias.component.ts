import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  private _noticias: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.noticias = [
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 1, 22),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      }
    ]
  }

  public get noticias(): any[] {
    return this._noticias;
  }

  public set noticias(value: any[]) {
    this._noticias = value;
  }

}
