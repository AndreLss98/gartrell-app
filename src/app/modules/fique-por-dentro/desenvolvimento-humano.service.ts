import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvimentoHumanoService {

  private _posts: any[] = [
    {
      titulo: 'Gestão no Empreendedorismo',
      resumo: 'Empreender é uma arte, ouvimos por aí. Empreender é fazer acontecer, é arriscar, lemos por aí. Empreender é um desafio diário, também ouvimos e lemos por aí.',
      autor: 'João Vitor',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Empreender é uma arte, ouvimos por aí. Empreender é fazer acontecer, é arriscar, lemos por aí. Empreender é um desafio diário, também ouvimos e lemos por aí. Todos estes conceitos e insights referentes ao empreendedorismo são válidos e devem ser incorporados à realidade daqueles que os transmitem com propriedade e, completando todos esses conceitos, de forma bem séria e de fundamental importância, empreender é gerenciar. 
      Gerenciar é saber lidar com pessoas e suas expectativas, processos e seus fluxos, entregas e suas particularidades. Tudo isso com qualidade, contemplando o que é o certo, do jeito certo, no tempo certo, o conhecido overdelivery, ou seja, a arte de entregar mais, buscando sempre agregar valor. Gerenciar é agregar valor.`,
      categoria: 'Nome da Categoria'
    },
    {
      titulo: 'O diabo não veste pravda (do russo Пра́вда, verdade) ',
      resumo: 'Parodiando o título do filme “O Diabo veste Prada”, onde a jornalista Andy Sachs (Anne Hathaway) trabalha como assistente da “diabólica” executiva Miranda Priestly (Meryl Streep). Miranda usa e abusa de um poder coercitivo, mantendo uma gestão pelo medo e constrangimento, tipicamente um assédio moral.',
      autor: 'Oseas Heckert',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Parodiando o título do filme “O Diabo veste Prada”, onde a jornalista Andy Sachs (Anne Hathaway) trabalha como assistente da “diabólica” executiva Miranda Priestly (Meryl Streep). Miranda usa e abusa de um poder coercitivo, mantendo uma gestão pelo medo e constrangimento, tipicamente um assédio moral.
      Muitas vezes a pessoa se vê diante de dilemas éticos: submeter-se diariamente a provar sua capacidade profissional, intelectual e pessoal, ficando à disposição 24 horas por dia, 7 dias por semana, inclusive para assuntos não profissionais, em função da necessidade do emprego para prover seu sustento; podendo chegar a assumir comportamentos impostos, distorcer sua própria personalidade e abrir mão de seus valores pessoais.
      Na busca pela reconhecimento e crescimento profissional, muitas vezes o emprego dos seus sonhos se torna um pesadelo, com muitos impactos na vida pessoal. Começando de pequenas concessões, pode-se chegar a executar ordens sem questionar, transformando obediência em subserviência, e vir a comer o pão que o diabo amassou, ou até vender a alma ao (mal)dito-cujo. 
      Mas será que vale a pena? Gary Chapman, em seu livro “As cinco linguagens da valorização pessoal no ambiente de trabalho” (ed. Mundo Cristão), alerta contra as características de líderes e de organizações tóxicas, tais como: assédio moral, bullying, abuso do poder, ações desumanas repetitivas e/ou de longa duração, manipulação (duplo vínculo, transferência da culpa), narcisismo/cinismo usurpador (líderes que assumem os louros do sucesso, roubando os créditos), comunicação fake (discurso incoerente com a ação)...
      Para sobreviver num ambiente assim, a pessoa precisa “engolir sapos” e conviver com níveis de estresse insuportáveis. Mais cedo, ou mais tarde, a conta vem: efeitos psicossomáticos, burn-out.
      Chapman recomenda estabelecer limites, reagir com assertividade sem agressividade, ou levar o problema ao conhecimento de canais de ouvidoria, RH, superiores. Se ainda assim a situação não se reverte, recomenda buscar alternativas para encontrar outro trabalho. Antes que adoeça, saia.   A transição pode doer, exigir sacrifícios, mas provavelmente vai encontrar outro lugar melhor.  
      Lembremos de Victor Frankl, que sobreviveu aos campos de concentração nazistas: “podem nos tirar tudo, exceto a liberdade de escolher como reagir”.
      
      O diabo não veste pravda, porque “é mentiroso, e pai da mentira...
      Quem mente se torna escravo da mentira. 
      Somente a verdade liberta. Eu sou o caminho, a verdade e a vida.
      Eu vim para que vocês tenham vida plena e abundante.
      Venham a mim, vocês que estão cansados e sobrecarregados, e eu lhes darei alívio.
      Sejam meus seguidores e aprendam comigo, e vocês encontrarão descanso.”
      
      (parafraseando Jesus de Nazaré, citações dos evangelistas João, caps. 8 e 10, e Mateus cap. 11).`,
      categoria: 'Nome da Categoria'
    }
  ]

  constructor() { }

  public getPosts() {
    return of(this.posts);
  }

  public get posts(): any[] {
    return this._posts;
  }

  public set posts(value: any[]) {
    this._posts = value;
  }
}
