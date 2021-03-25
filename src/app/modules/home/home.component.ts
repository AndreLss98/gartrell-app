import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos/servicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _equipe: any[] = [];
  private _eventos: any[] = [];
  private _noticias: any[] = [];
  private _reflexoes: any[] = [];

  constructor(
    public servicosService: ServicosService
  ) { }

  ngOnInit(): void {

    this.equipe = [
      {
        name: "Eleny Vassão",
        cargo: "Capelã Evangélica/Consultora em Capelania Cristã",
        bio: `Formada em Artes Plásticas e Teologia
        Mestre em Aconselhamento Bíblico
        Escritora
        Exerceu capelania na USP/SP por 22 anos
        Consultora em Capelania
        Capelã Evangélica TÍt. Do I. I. Emílio Ribas-SP e HSPE
        Diretora geral da ACS
        Atualmente, Diretora Geral da ACS e Capelã - Missionária pelo Supremo Concilio da I. P. B`,
        img: 'eleny_vassao.jpg'
      }
    ]

    this.eventos = [
      { dia: 18, mes: 'Novemnbro', titulo: 'IV Jornada de Saúde Mental', descricao: 'Pandemia Global e Fé Crisã', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 25, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 27, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 31, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' }
    ]

    this.noticias = [
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' }
    ]

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

  public get equipe(): any[] {
    return this._equipe;
  }

  public set equipe(value: any[]) {
    this._equipe = value;
  }

  public get eventos(): any[] {
    return this._eventos;
  }
  
  public set eventos(value: any[]) {
    this._eventos = value;
  }

  public get noticias(): any[] {
    return this._noticias;
  }

  public set noticias(value: any[]) {
    this._noticias = value;
  }

  public get reflexoes(): any[] {
    return this._reflexoes;
  }
  
  public set reflexoes(value: any[]) {
    this._reflexoes = value;
  }
}
