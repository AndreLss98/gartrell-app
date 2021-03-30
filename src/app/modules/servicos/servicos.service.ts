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
      descricao: 'Indicada para qualquer pessoa (crianças, adolescentes, jovens e adultos) que lida com diferentes formas de sofrimento psíquico ou mental, sejam elas de base orgânica ou funcional, com manifestações leves, moderadas ou graves, em situações de crises agudas ou crônicas.'
    },
    {
      id: 2,
      nome: 'Psicologia',
      icone: 'assets/svg/psicologia.svg',
      descricao: 'Acompanhamento Psicoterápico (Psicoterapia, para todas as idades a partir de 7 anos); Orientação Vocacional/Profissional; Apoio ao Vestibulando, Concurseiro; Colocação/Recolocação Profissional, Readequação/Reorientação de Carreira.'
    },
    {
      id: 3,
      nome: 'Neuropsicologia',
      icone: 'assets/svg/neuropsicologia.svg',
      descricao: 'Identificar a presença ou não de disfunção cognitiva; auxiliar no diagnóstico diferencial; identificar e compreender quais habilidades estão preservadas, após um dado quadro neurológico, psiquiátrico, neuropsiquiátrico ou de desenvolvimento; acompanhar a evolução do quadro em relação ao tratamento medicamentoso e cirúrgico; acompanhar a evolução da reabilitação; documentar o déficit cognitivo'
    },
    {
      id: 4,
      nome: 'Grupos de Suporte e Crescimento Pessoal',
      icone: 'assets/svg/grupos_de_suporte_e_crescimento_pessoal.svg',
      descricao: 'Destinados às pessoas que passam por dificuldades semelhantes ou partilham de momentos ou interesses comuns. Estes grupos permitirão aos participantes compartilharem suas experiências, desejos, aspirações e metas, bem como suas necessidades, inseguranças, aflições, medos, dúvidas, problemas, etc. Desenvolvidos em 10 a 15 encontros semanais com duração de 1h30 minutos.'
    },
    {
      id: 5,
      nome: 'Capacitações',
      icone: 'assets/svg/capacitacoes_icon.svg',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 6,
      nome: 'Consultoria',
      icone: 'assets/svg/consultoria_icon.svg',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 7,
      nome: 'Parcerias ou Acordos de Cooperação em Serviços, Atividades e Projetos',
      icone: 'assets/svg/parcerias_ou_acordos_de_cooperacao.svg',
      descricao: 'O Instituto Gartrell tem buscado estabelecer PARCERIAS OU ACORDOS DE COOPERAÇÃO com profissionais e instituições de saúde, de educação e com entidades sociais e religiosas verdadeiramente comprometidas com a ética (valores nobres e elevados) e a cidadania, visando à troca de saberes, experiências e a realização conjunta de ações psicoeducativas (ministração de cursos/capacitações, treinamentos, palestras, consultorias, eventos, etc.).'
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
