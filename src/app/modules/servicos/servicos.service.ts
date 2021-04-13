import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Servico } from 'src/app/shared/models/servico.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private _servicos: Servico[] = [
    {
      id: 133,
      nome: 'Psiquiatria',
      icone: 'assets/svg/psiquiatria.svg',
      descricao: ''
    },
    {
      id: 136,
      nome: 'Psicologia',
      icone: 'assets/svg/psicologia.svg',
      descricao: ''
    },
    {
      id: 138,
      nome: 'Neuropsicologia',
      icone: 'assets/svg/neuropsicologia.svg',
      descricao: ''
    },
    {
      id: 139,
      nome: 'Grupos de Suporte e Crescimento Pessoal',
      icone: 'assets/svg/grupos_de_suporte_e_crescimento_pessoal.svg',
      descricao: ''
    },
    {
      id: 140,
      nome: 'Capacitações, Palestras Congressos e Eventos',
      icone: 'assets/svg/capacitacoes_icon.svg',
      descricao: ''
    },
    {
      id: 141,
      nome: 'Consultoria',
      icone: 'assets/svg/consultoria_icon.svg',
      descricao: ''
    },
    {
      id: 142,
      nome: 'Parcerias ou Acordos de Cooperação e Serviços',
      icone: 'assets/svg/parcerias_ou_acordos_de_cooperacao.svg',
      descricao: ''
    }
  ];

  constructor(private http: HttpClient) { }

  public get servicos(): Servico[] {
    return this._servicos;
  }
  public set servicos(value: Servico[]) {
    this.servicos.forEach(servico => {
      const temp = value.find(el => el.id == servico.id);
      if (temp) {
        servico.nome = temp.nome;
        servico.descricao = temp.descricao;
      }
    });
  }

  public getAll() {
    return this.http.get(`${environment.wpBaseUrl}/servico`);
  }

  public getById(id: number) {
    return of(this.servicos.find(servico => servico.id === id));
  }
}
