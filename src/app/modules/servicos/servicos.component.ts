import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  private _servicesCategory: any[] = [];

  constructor() {
    this.servicesCategory = [
      { nome: 'Psiquiatria' },
      { nome: 'Psicologia' },
      { nome: 'Neuropsicologia' },
      { nome: 'Grupos de Suporte e Crescimento Pessoal' },
      { nome: 'Capacitações' },
      { nome: 'Consultoria' }
    ]
  }

  ngOnInit(): void {

  }

  public get servicesCategory(): any[] {
    return this._servicesCategory;
  }

  public set servicesCategory(value: any[]) {
    this._servicesCategory = value;
  }

}
