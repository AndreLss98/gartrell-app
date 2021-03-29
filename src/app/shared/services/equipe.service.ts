import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private _equipeInterna: any[] = [
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
    },
    {
      name: "Eliane Paixão",
      cargo: "Psicóloga/Neuropsicóloga",
      cod: 'CRP - 09/2238',
      bio: null,
      img: 'eliane_dias_da_paixao.jpg'
    },
    {
      name: "Guilherme Falcão",
      cargo: "Psicólogo",
      cod: 'CRP - 08/04130',
      bio: `Graduação em Psicologia e Filosofia
      Especialista nas áreas de: Teologia, Sexualidade Humana e Psicologia Clínica, Gênero, Logoterapia, Gerontologia
      Mestre em Tecnologia e Trabalho Cargo
      Professor Universitário
      Consultor da Sociedade Brasileira de Geriatria e Gerontologia SBGG e da Associação Brasileira de Logoterapia e Análise Existencial – ABLAE
      Membro credenciado da Associação Internacional de Logoterapia e Análise Existencial pelo Instituto Viktor Frankl de Viena
      Pastor da Igreja Batista em Bacacheri/PR
      Atualmente: é Sócio Relações-públicas do Instituto Phileo de Psicologia e da Associação de Logoterapia Viktor E. Frankl`,
      img: 'guilherme_falcao.jpg'
    },
    {
      name: "Henrique do Prado Cabral",
      cargo: "Psiquiatra",
      cod: 'CRM-GO - 10.346',
      bio: `Presbítero Presbiteriano (IP Beréia/GO-GO)
      Médico Psiquiatra
      Casado com Michelle, pai de Pedro Henrique e Rosa Maria
      Médico (UFG 1998-2003), com residência em Psiquiatria (PAX CLÍNICA 2006-2009)
      Foi Psiquiatra do Exército Brasileiro por 8 anos
      Membro Titular da Associação Brasileira de Psiquiatria (ABP)
      Membro da ABMLPM-GO - Associação Brasileira de Medicina Legal e Perícias Médicas – Regional GO (Diretor Científico Adjunto)
      Perito ad hoc no TRT 18ª Região e TRF 1ª Região – Seção Goiás
      MBA em Gestão em Saúde (FGV)
      Atualmente, diretor técnico da Clínica ATTO ( Hospital-dia), e também da ASCEP em Goiânia-GO.`,
      img: 'henrique_do_prado_cabral.jpg'
    },
    {
      name: "Janine Gomes Cassiano",
      cargo: "Terapeuta Ocupacional",
      cod: 'CREFITO-4ª 1099',
      bio: `Terapeuta ocupacional
      Doutora em Ciências da Saúde
      Professora Associada aposentada da UFMG
      Autora de artigos e capítulos de livros acadêmicos de Terapia Ocupacional
      Gerontologia e Reabilitação
      Atualmente, é Ministra da Maturidade da Primeira Igreja Batista em Goiânia.`,
      img: 'janine_gomes_cassiano.jpg'
    },
    {
      name: "Maria das Graças Brasil",
      cargo: null,
      cod: 'CRM-GO 1387',
      bio: `Graduação em Medicina (UFG);
      Mestrado em Psiquiatria, Psicanálise e Saúde Mental (UFRJ)
      Doutorado em Psiquiatria (UFG)
      Professora no Dep. de Medicina e Dep. de Psicologia (PUC/GO)
      Experiência de mais de 45 anos Medicina, com ênfase em neuropediatria e neuropsiquiatria da Infância e Adolescência`,
      img: 'maria_das_gracas_nunes_brasil.jpg'
    },
    {
      name: "Neli Freitas",
      cargo: "Educadora e Consultora Cristã",
      cod: null,
      bio: `Educadora
      Mestre em Educação Cristã (Seminário Teológico de Dallas-USA)
      Atualmente atua como consultora na área de educacional cristã`,
      img: 'neli_maria_de_freitas.jpg'
    },
    {
      name: "Oseas Heckert",
      cargo: "Engenheiro de Pessoas para o Mundo Coorporativo",
      cod: null,
      bio: `Graduação em Engenharia Eletrônica (ITA e PUC-RJ)
      MBA em Gestão de Projetos (FGV), com foco nas disciplinas PMBOK de Comunicação e Recursos Humanos
      Especialistas nas áreas de: Administração Industrial (Instituto Mauá de Tecnologia), Tecnologia de Internet (CEFET/IBPI), Esp. em Responsabilidade Social e 3º Setor (CEATS-FIA/USP), Gerenciamento da Mudança (Changefirst), Coaching (Integrated Coaching Institute), Teoria Junguiana dos Tipos Psicológicos (Type Resources, PTI/PTE, MBTI)
      Formação e Capacitação em Governança Corporativa no IBGC, em Gestão de Pessoas na ABRH, e em Tipos Psicológicos na Association for Psychological Type International, organismos dos quais é membro
      Atualmente, atua como Engenheiro de Pessoas para o Mundo Corporativo`,
      img: 'oseas_heckert.jpg'
    },
    {
      name: "Pedro Américo",
      cargo: "Advogado",
      cod: null,
      bio: null,
      img: null
    },
    {
      name: "Susie Amâncio G. Roure",
      cargo: "Psicóloga",
      cod: 'CRP – 09/768',
      bio: `Psicóloga pela PUC-GO (1986)
      Pianista pela UFG-GO (1985)
      Mestre em Educação pela UFG-GO (2000)
      Doutorado pela UFG-GO (2006)
      Vasta experiência na área de Educação e Psicologia, atuando principalmente nos seguintes temas: psicologia do desenvolvimento e da aprendizagem, desenvolvimento moral, disciplina-indisciplina, autoridade, autonomia, ética. educação e formação humana
      Membro atuante na Primeira Igreja Batista de Goiânia-Go
      Atualmente, professora da Graduação e da Pós-graduação em Psicologia (UFG-GO)`,
      img: 'susie_amancio _g_roure.jpeg'
    },
    {
      name: "Tiago Batista de Oliveira",
      cargo: "Psiquiatra",
      cod: 'CRM 11.530',
      bio: `Médico Psiquiatra
      Ex-Diretor técnico do CREDEQ – Centro Estadual de Referência e Excelência em Dependência Química (Aparecida de Goiânia)
      Atualmente, dá expediente em seu consultório.`,
      img: 'tiago_batista_de_oliveira.jpg'
    },
    {
      name: "Raúl Vitor",
      cargo: "Historiador",
      cod: null,
      bio: null,
      img: null
    },
    {
      name: "Uriel Heckert",
      cargo: "Psiquiatra",
      cod: 'CRM-MG 5721',
      bio: `Médico Psiquiatra (UFJF/UFRJ)
      Mestre em Filosofia (UFJF)
      Doutor em Psiquiatria (USP)
      Prof. de Psiquiatria e de Antropologia Médica (UFJF/Aposentado)
      Membro Pleno do Corpo de Psicólogos e Psiquiatras Cristãos (CPPC)
      Presbítero em disponibilidade na 4ª Igreja Presbiteriana de Juiz de Fora (RJ)`,
      img: 'uriel_heckert.jpg'
    },
    {
      name: "Vítor Geovanni P. Mello",
      cargo: "Pastor, Físico e Matemático",
      cod: null,
      bio: null,
      img: null
    },
    {
      name: "Elóide A. A. Botelho",
      cargo: "Psicóloga",
      cod: 'CRP 09/3124',
      bio: `Área Cognitivo Comportamental e Processual; Esp. em Neuropsicologia e Avaliação Psicológica; Atende: Adolescentes, jovens e adultos`,
      img: 'eloide_a_a_botelho.jpg',
      interno: true
    },
    {
      name: "Máris Eliana Dietz",
      cargo: "Psicóloga, Orientadora Profissional e de Carreira",
      cod: 'CRP 09/2863',
      bio: `Especialista em TCC, Gestão de Pessoas e Educação Inclusiva`,
      img: 'maris_eliana_dietz.jpg',
      interno: true
    },
    {
      name: "Regina de Castro Silva",
      cargo: "Psicóloga/Neuropsicóloga",
      cod: 'CRP 09/2645',
      bio: `Psicóloga/Neuropsicóloga, especialista em TCC, psicologia hospitalar e da saúde`,
      img: 'regina_de_castro_silva.jpg',
      interno: true
    },
    {
      name: "João Vitor Campos",
      cargo: null,
      cod: null,
      bio: null,
      img: 'joao_vitor_santos.jpg',
      interno: true
    }
  ];

  constructor() { }

  public getEquipeInterna() {
    return of(this.getEquipeInterna);
  }

  public get equipeInterna() {
    return this._equipeInterna;
  }
  
  public set equipeInterna(value) {
    this._equipeInterna = value;
  }
}
