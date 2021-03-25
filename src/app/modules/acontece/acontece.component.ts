import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acontece',
  templateUrl: './acontece.component.html',
  styleUrls: ['./acontece.component.scss']
})
export class AconteceComponent implements OnInit {

  private _acontecimentos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.acontecimentos = [
      { dia: 18, mes: 'Novemnbro', titulo: 'IV Jornada de Saúde Mental', descricao: 'Pandemia Global e Fé Crisã', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 25, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 27, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 31, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' }
    ]
  }

  public get acontecimentos(): any[] {
    return this._acontecimentos;
  }

  public set acontecimentos(value: any[]) {
    this._acontecimentos = value;
  }
}
