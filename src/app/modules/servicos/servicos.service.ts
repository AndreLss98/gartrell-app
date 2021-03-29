import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private _servicos: any[] = [
    {
      id: 1,
      nome: 'Psiquiatria',
      icone: 'assets/svg/psiquiatria.svg',
      descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 2,
      nome: 'Psicologia',
      icone: 'assets/svg/psicologia.svg',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 3,
      nome: 'Neuropsicologia',
      icone: 'assets/svg/neuropsicologia.svg',
      descricao: 'Etiam rutrum erat nec quam tincidunt, sed commodo lorem consequat. Cras et vulputate lacus. Nullam lacinia vitae nisl a tempor. In hac habitasse platea dictumst. Donec nulla ligula, molestie aliquet lorem vel, consectetur porttitor nisi. Nulla mattis, sem eget dignissim efficitur, magna lorem fermentum nibh, eget tincidunt purus libero quis lorem.'
    },
    {
      id: 4,
      nome: 'Grupos de Suporte e Crescimento Pessoal',
      icone: 'assets/svg/grupos_de_suporte_e_crescimento_pessoal.svg',
      descricao: 'Aenean iaculis libero odio, quis euismod sem elementum ac. Nam a aliquam lorem. Morbi ut erat libero. Aenean imperdiet diam ut laoreet egestas. Nunc laoreet quis mi et pharetra. Nulla feugiat nec nulla finibus tincidunt. Sed at finibus ante. Quisque ut odio felis.'
    },
    {
      id: 5,
      nome: 'Capacitações',
      icone: 'assets/svg/capacitacoes_icon.svg',
      descricao: 'Etiam tincidunt tincidunt ante eu pellentesque. Nulla id nisl interdum, fermentum ante ut, scelerisque quam. Sed at mattis nisl, nec scelerisque mauris. Suspendisse pretium dolor nec diam interdum ultrices. Aliquam porttitor mauris tincidunt lacus lacinia, non fermentum est vulputate. Suspendisse tincidunt luctus nisl, id feugiat ligula mollis a.'
    },
    {
      id: 6,
      nome: 'Consultoria',
      icone: 'assets/svg/consultoria_icon.svg',
      descricao: 'Curabitur tristique diam at turpis congue bibendum. Quisque libero erat, venenatis non ante ut, congue viverra nunc. Sed imperdiet augue non fringilla ornare. Aliquam tempus auctor facilisis. Nullam fringilla euismod urna, vitae pulvinar nulla rutrum eget. Suspendisse potenti. Phasellus in nibh gravida, pulvinar ipsum a, dictum erat.'
    },
    {
      id: 7,
      nome: 'Parcerias ou Acordos de Cooperação em Serviços, Atividades e Projetos',
      icone: 'assets/svg/parcerias_ou_acordos_de_cooperacao.svg',
      descricao: 'Curabitur tristique diam at turpis congue bibendum. Quisque libero erat, venenatis non ante ut, congue viverra nunc. Sed imperdiet augue non fringilla ornare. Aliquam tempus auctor facilisis. Nullam fringilla euismod urna, vitae pulvinar nulla rutrum eget. Suspendisse potenti. Phasellus in nibh gravida, pulvinar ipsum a, dictum erat.'
    }
  ];

  constructor() { }

  public get servicos(): any[] {
    return this._servicos;
  }
  public set servicos(value: any[]) {
    this._servicos = value;
  }

  public getAll() {
    return of(this.servicos);
  }

  public getById(id: number) {
    return of(this.servicos.find(servico => servico.id === id))
  }
}
