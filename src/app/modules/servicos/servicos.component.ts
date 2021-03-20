import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  constructor() { }
  private _servicesCategory: any[] = [];
  
  ngOnInit(): void {
    this.servicesCategory = [
      { nome: 'Psiquiatria' },
      { nome: 'Psicologia' },
      { nome: 'Neuropsicologia' },
      { nome: 'Grupos de Suporte e Crescimento Pessoal' },
      { nome: 'Capacitações' },
      { nome: 'Consultoria' },
      // { nome: 'Parcerias ou Acordo de Cooperação em Serviços, Atividades e Projetos' }
    ]
  }

  public get servicesCategory(): any[] {
    return this._servicesCategory;
  }

  public set servicesCategory(value: any[]) {
    this._servicesCategory = value;
  }

}
