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
      descricao: `Indicada para qualquer pessoa (crianças, adolescentes, jovens e adultos) que lida com diferentes formas de sofrimento psíquico ou mental, sejam elas de base orgânica ou funcional, com manifestações leves, moderadas ou graves, em situações de crises agudas ou crônicas.
      O médico psiquiatra atende, faz o diagnóstico, indica ao paciente as diferentes abordagens terapêuticas (se julgar necessário), medica, reabilita, conduz e acompanha a terapia medicamentosa (quando prescrita).  Mais do que tratar doenças, ele cuida de pessoas.`
    },
    {
      id: 2,
      nome: 'Psicologia',
      icone: 'assets/svg/psicologia.svg',
      descricao: `Indicada para as mais diversas formas de sofrimento psíquico ou mental, leves, moderados ou elevados, que podem ocasionar grandes e graves prejuízos para a pessoa.
      O psicólogo investiga e busca compreender todos os processos mentais relativos ao funcionamento psíquico e neuropsíquico do paciente, bem como os processos socioculturais, fisiológicos e biológicos que o acompanham.
      Atua visando à sua integral habilitação e desenvolvimento global, valorizando e focalizando sempre todo o seu potencial de saúde, inteligência e ação.
      Com o auxílio da psicoterapia, o paciente identifica em sua pessoa seus aspectos saudáveis, não saudáveis, adoecidos ou disfuncionais. Por meio dela, aprende a reconhecer em si elementos até então desconhecidos, mas que estão na base dos possíveis comportamentos indesejados, das dificuldades, das incertezas e das angústias que o acometem.
      Oferece acompanhamento psicológico para gestantes (perinatal e pós-natal), para orientá-las em como lidar com a criança em casos de diagnósticos precoces de síndromes ou transtornos de neurodesenvolvimento, a fim de promover e prevenir a saúde mental da criança e contribuir com seu desenvolvimento.`
    },
    {
      id: 3,
      nome: 'Neuropsicologia',
      icone: 'assets/svg/neuropsicologia.svg',
      descricao: `Tem por finalidade: identificar a presença ou não de disfunção cognitiva; auxiliar no diagnóstico diferencial; identificar e compreender quais habilidades estão preservadas, após um dado quadro neurológico, psiquiátrico, neuropsiquiátrico ou de desenvolvimento; acompanhar a evolução do quadro em relação ao tratamento medicamentoso e cirúrgico; acompanhar a evolução da reabilitação; documentar o déficit cognitivo.
      Por meio desta avaliação, o neuropsicólogo realiza uma aprofundada investigação e análise dos diferentes domínios cognitivos cerebrais do paciente, tais como: atenção, memória, linguagem, percepção, raciocínio, abstração, habilidades motoras, visuoconstrução, aprendizagem, funções executivas, processamento da informação, afeto e humor.
      Indicada para crianças e adolescentes quando apresentam problemas comportamentais e de aprendizado escolar. Também muito recomendada nos casos de déficits causados por abuso de drogas, álcool e outras substâncias, em lesões cerebrais decorrentes de traumatismos, AVC ou derrame, nas epilepsias e também nas questões forenses (judiciais).`
    },
    {
      id: 4,
      nome: 'Grupos de Suporte e Crescimento Pessoal',
      icone: 'assets/svg/grupos_de_suporte_e_crescimento_pessoal.svg',
      descricao: 'Destinados às pessoas que passam por dificuldades semelhantes ou partilham de momentos ou interesses comuns. Estes grupos permitirão aos participantes compartilharem suas experiências, desejos, aspirações e metas, bem como suas necessidades, inseguranças, aflições, medos, dúvidas, problemas, etc. Desenvolvidos em 10 a 15 encontros semanais com duração de 1h30 minutos.'
    },
    {
      id: 5,
      nome: 'Capacitações, Palestras Congressos e Eventos',
      icone: 'assets/svg/capacitacoes_icon.svg',
      descricao: `Os projetos, as atividades e as ações psicoeducativas desenvolvidas pelo Instituto Gartrell, tem por finalidade a disseminação do conhecimento científico ligado à saúde mental, educação e cidadania, visando a formação de valores nobres e elevados em seus públicos alvos. Tais modalidades de trabalho, podem ser realizadas em escolas, instituições sociais e religiosas, em empresas públicas e privadas de nossa cidade e região.`
    },
    {
      id: 6,
      nome: 'Consultoria',
      icone: 'assets/svg/consultoria_icon.svg',
      descricao: 'Direcionada às instituições educacionais e afins, focaliza o processo ensino-aprendizagem do (a) aluno (a), visando a sua formação integral, centrada na excelência acadêmica, ética e cidadania. Objetiva apoiar e capacitar o trabalho desenvolvido pela escola junto ao professor, coordenador, aluno e à sua família.'
    },
    {
      id: 7,
      nome: 'Parcerias ou Acordos de Cooperação e Serviços',
      icone: 'assets/svg/parcerias_ou_acordos_de_cooperacao.svg',
      descricao: 'O Instituto Gartrell celebra PARCERIAS OU ACORDOS DE COOPERAÇÃO E SERVIÇOS com profissionais e instituições de saúde e educação, bem como com entidades sociais e religiosas verdadeiramente comprometidas com a ética (valores nobres e elevados) e a cidadania, visando à troca de saberes, experiências e a realização conjunta de ações psicoeducativas (ministração de cursos/capacitações, treinamentos, palestras, consultorias, eventos, etc.) que valorizem e focalizem a saúde física, mental e o bem-estar geral das pessoas em nossa cidade e região.'
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
