import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  private _equipe: any[] = [];
  private _colaboradores: any[] = [];

  constructor() {}

  ngOnInit(): void {

    this.equipe = [
      {
        name: "Elóide A. A. Botelho",
        cargo: "Psicóloga; CRP - 09/3124",
        bio: `Psicóloga - Área Cognitivo Comportamental e Processual;
        Esp, em Neuropsicologia e Avaliação Psicológica; Atende;
        Adolescentes, jovens e adultos.`,
        img: 'Elóide A. A. Botelho.jpg'
      }
    ],

    this.colaboradores = [
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

  public get equipe(): any[] {
    return this._equipe;
  }

  public get colaboradores(): any[]{
    return this._colaboradores;
  }

  public set equipe(value: any[]) {
    this._equipe = value;
  }

  public set colaboradores(value: any[]) {
    this._colaboradores = value;
  }  
}
