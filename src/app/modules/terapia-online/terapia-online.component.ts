import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-online',
  templateUrl: './terapia-online.component.html',
  styleUrls: ['./terapia-online.component.scss']
})
export class TerapiaOnlineComponent implements OnInit {

  private _profissionais: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.profissionais = [
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      },
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      },
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      }
    ]
  }

  public get profissionais(): any[] {
    return this._profissionais;
  }

  public set profissionais(value: any[]) {
    this._profissionais = value;
  }

}
