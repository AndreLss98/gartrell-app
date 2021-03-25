import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflexoes',
  templateUrl: './reflexoes.component.html',
  styleUrls: ['./reflexoes.component.scss']
})
export class ReflexoesComponent implements OnInit {

  private _reflexoes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reflexoes = [
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 1, 22),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      },
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 3, 9),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      },
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 11, 25),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      }
    ]
  }

  public get reflexoes(): any[] {
    return this._reflexoes;
  }

  public set reflexoes(value: any[]) {
    this._reflexoes = value;
  }

}
