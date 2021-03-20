import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _servicesCategory: any[] = [];
  private _equipe: any[] = [];

  private _eventos: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.servicesCategory = [
      { nome: 'Psiquiatria' },
      { nome: 'Psicologia' },
      { nome: 'Neuropsicologia' },
      { nome: 'Grupos de Suporte e Crescimento Pessoal' },
      { nome: 'Capacitações' },
      { nome: 'Consultoria' },
      { nome: 'Parcerias ou Acordo de Cooperação em Serviços, Atividades e Projetos' }
    ]

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
  }

  public get servicesCategory(): any[] {
    return this._servicesCategory;
  }

  public set servicesCategory(value: any[]) {
    this._servicesCategory = value;
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
}
