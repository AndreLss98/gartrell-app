import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaudeIntegralService {

  private _posts: any[] = [
    {
      titulo: 'DIAGNOSTICAR NÃO É ROTULAR',
      resumo: '“Isto me estranha! Não estou entendendo nada!” exclama, aturdido, mais de uma vez, o doutor Herzentube diante de mais um novo “caso” ao longo das páginas de Os Irmãos Karamázov de Dostoiévski. Personagem satírico que talvez represente o estado precário da medicina de sua época, o bondoso e confuso doutor certamente não é o tipo de médico que nós gostaríamos de consultar.',
      autor: 'Miguel Augusto Rios Miguel Augusto Rios (Esp.)',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `“Isto me estranha! Não estou entendendo nada!” exclama, aturdido, mais de uma vez, o doutor Herzentube diante de mais um novo “caso” ao longo das páginas de Os Irmãos Karamázov de Dostoiévski. Personagem satírico que talvez represente o estado precário da medicina de sua época, o bondoso e confuso doutor certamente não é o tipo de médico que nós gostaríamos de consultar.
      Desde as formulações de Hipócrates se espera do médico perícia necessária para ouvir, observar, tocar, examinar para se chegar a um diagnóstico. Mesmo naqueles tempos de limitada terapêutica, o diagnóstico apontava com algum grau de certeza o que se esperar do caso: resolução espontânea, cura após um tempo ou morte.
      A psiquiatria adaptou a tradição médica para compreender e lidar com as doenças da alma e do cérebro. Mas, como essas doenças carregam consigo grande dose de subjetividade, mostrou-se uma tarefa ainda mais complexa e demorada.      
      Afirmar que a tristeza que a pessoa está manifestando é um sentimento normal e não uma depressão ou que as dificuldades escolares são fruto de dislexia e não preguiça pode permitir uma significativa mudança de curso na vida da pessoa; se a vida humana é preciosa, não devemos tratar com desdém a perícia necessária que evitará um futuro mais sombrio.
      Estranha-me que psiquiatras sejam acusados de “rotular” toda vez que emitem um diagnóstico como, por exemplo, “episódio depressivo único, grau leve, segundo os critérios do DSM – V” e prescrevam “psicoterapia breve ou aconselhamento... medicamentos não seriam necessários”.
      Diagnosticar não é rotular. Diagnosticar é resultado de conhecimento, discernimento e sabedoria acumuladas; permite tratar e cuidar em tempo. Rotular expressa ignorância, visão obtusa e carrega consigo preconceitos.
      Numa época em que as pessoas se diagnosticam e escolhem seu melhor tratamento via internet, a velha sabedoria acumulada é desprezada. Rotular expressa a superficialidade apressada de nossa época. O diagnosticador é o leigo; o perito virou o rotulador! Isto me espanta! Não estou entendendo nada!`
    },
    {
      titulo: 'Psicologia Cognitiva',
      resumo: 'A Psicologia Cognitiva é a área da psicologia que estuda cientificamente a inteligência humana. É uma área do conhecimento relativamente nova; seu início se deu na década de 50 do século XX. Na época investigadores de áreas diversas, como estudiosos da linguagem, psicólogos behavioristas além de matemáticos e engenheiros, começaram a unir esforços para entender melhor o funcionamento da “caixa preta” da mente humana.',
      autor: 'Dr. Miguel Augusto Rios',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `A Psicologia Cognitiva é a área da psicologia que estuda cientificamente a inteligência humana. É uma área do conhecimento relativamente nova; seu início se deu na década de 50 do século XX. Na época investigadores de áreas diversas, como estudiosos da linguagem, psicólogos behavioristas além de matemáticos e engenheiros, começaram a unir esforços para entender melhor o funcionamento da “caixa preta” da mente humana. Até então, muitos psicólogos achavam “subjetivo demais” estudar a mente; achavam que só era “científico” estudar o “comportamento” observado e sua relação com o ambiente. Ultrapassando este preconceito, os psicólogos cognitivos se lançaram a desenvolver maneiras (métodos) de se estudar fenômenos como a percepção humana, atenção, memória, tomada de decisões, etc.
      Um desses fundadores da psicologia da inteligência foi o psicólogo norte-americano George A. Miller (1920-2012). Miller se tornou conhecido pela publicação em 1956 de um artigo científico que é considerado um marco da fundação da nova ciência e que se tornaria um clássico. O nome deste trabalho parece místico, mas não tem nada de cabalístico: O Mágico Número Sete!
      Miller estudava a chamada memória de curto prazo (chamada hoje de memória de trabalho) e observou que, em média, as pessoas conseguem reter em suas mentes, a cada momento, de 5 a 9 coisas (em média sete) ou +/- 7 conjuntos de coisas. É por isso que a maneira como guardamos o número de nosso CPF é, por exemplo: 56I - 123- 467- 87 e não 56I12346787... Acima deste limite começamos a cometer erros e perder informações.
      O recadinho simples da chamada Lei de Miller era o seguinte: nossa capacidade de reter informações é limitada e nos impõe limites. 
      É oportuno lembrar-nos desta descoberta nesta época de super-heróis em que vivemos. Muitos estudantes de ensino médio, concurseiros, aspirantes a uma concorrida vaga numa grande empresa sonham alcançar as habilidades extraordinárias de um Sherlock Holmes ou de um Jason Bourne. Sistemas de ensino ou empresas querem um sr. Holmes ou Bourne em seus quadros; ou a Mídia e métodos inovadores de aprendizado fazem-nos acreditar nisso... mas, caiamos na real: as capacidades humanas de trabalho intelectual estão muito aquém das habilidades destes personagens de ficção. Eles nunca existiram (ainda que biografias fantasiosas encham as prateleiras de livros).
      Nossa inteligência é maravilhosamente feita, mas não consegue ser mais extraordinária ou dotada do que originalmente é. Usamos 100% do nosso cérebro e não 10%!!! 
      Nossa sociedade seria menos doente emocionalmente e menos frustrada se aceitasse os seus limites.`
    },
    {
      titulo: 'Quando as Expectativas Fazem Adoecer',
      resumo: 'No século XXI a humanidade (pelo menos os segmentos mais privilegiados economicamente) alcançou um nível de conhecimento científico e tecnológico, bem como um acesso facilitado a este conhecimento, jamais visto anteriormente. A quantidade de informações com que temos que lidar diariamente em nossas vidas é enorme.',
      autor: 'Dr. Miguel Augusto Rios',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `No século XXI a humanidade (pelo menos os segmentos mais privilegiados economicamente) alcançou um nível de conhecimento científico e tecnológico, bem como um acesso facilitado a este conhecimento, jamais visto anteriormente. A quantidade de informações com que temos que lidar diariamente em nossas vidas é enorme. A lista de tarefas cotidianas, compromissos sociais, listas de itens “indispensáveis” que precisamos ter em nossos lares, os anos exigidos para formação profissional, as recomendações que preciso seguir para manter minha saúde é muito maior do que de meus avós.
      Será que o indivíduo suporta as exigências da vida contemporânea? Será que ultrapassamos o limite do razoável em termos de coisas que podemos pensar, lembrar, resolver e fazer ao longo de um dia? Muitas evidências – colhidas da intuição de cada um quando passa a refletir sobre sua vida e até as científicas – apontam para o preocupante aumento do sofrimento pessoal relacionado ao “estresse” ambiental; de doenças a sofrimento psicológico.
      A pessoa “estressada” vai ao médico querendo saber se sua insônia, dores de cabeça, mal humor frequente, cansaço e dificuldades de memória tem a ver com o excesso de trabalho ou multitarefas domésticas e sociais. Ela pode ouvir do médico a confirmação (após, espera-se, de cuidadosa avaliação profissional) desse prediagnostico que ela mesma formulou: “não tem nada de errado com você, você só está estressada, precisa de descansar”. Muitas vezes, infelizmente, esta recomendação sábia somente será mais um item de sua longa lista de problemas a resolver; talvez para o ano que vem.
      O primeiro parágrafo deste texto tem um erro fundamental. O culpado para este estado das coisas não é este ente abstrato, onipresente em inúmeros textos semelhantes a este, chamado “sociedade contemporânea do século XXI”. O culpado por eu estar estressado sou eu mesmo. Fui eu mesmo que elaborei minha enorme lista de tarefas e compromissos. Sim, é verdade, que esta lista já era suficientemente grande quando eu alcancei a idade da razão, mas naquela época eu era suficientemente jovem para decidir cortar itens.
      Outra expressão popular em posts de saúde -  “qualidade de vida” – também parece abstrato demais (apesar de proferido de maneira pomposa). Talvez ele já me traga uma lista grande de coisas para aprender e fazer. Ela me cria expectativas, e estas expectativas me enredarão em compromissos e “sonhos” que cobrarão um alto preço. O preço alto é minha vida. Não dá para dividir no cartão de crédito.
      Certa vez ouvia uma conhecida ativista liberiana e minha memória guardou esta seguinte frase: “nós [africanos] não precisamos de estradas, prédios, crescimento e desenvolvimento econômico... essas coisas para viver; nós estamos a milhares de anos aqui; nós vivemos e fomos felizes por milhares de anos sem essas coisas. Quem nos disse que precisamos dessas coisas para viver e sermos felizes?”`
    },
    {
      titulo: 'Transtorno do Pânico',
      resumo: 'Segundo o texto do DSM-V (classificação americana dos transtornos psiquiátricos) o agora famoso “transtorno do pânico” é caracterizado por ataques de pânico (ansiedade súbita e intensa) inesperados e recorrentes. Um ataque de pânico é o aparecimento súbito de medo ou desconforto intenso que atinge um pico em poucos minutos e durante o qual pelo menos quatro de uma lista de treze sintomas ocorrem (entre eles palpitações, sensação de coração acelerado, sudorese, tremores, sensação de mal-estar cardíaco ou abdominal, medo de morrer, entre eles).',
      autor: 'Dr. Miguel Augusto Rios',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Segundo o texto do DSM-V (classificação americana dos transtornos psiquiátricos) o agora famoso “transtorno do pânico” é caracterizado por ataques de pânico (ansiedade súbita e intensa) inesperados e recorrentes. Um ataque de pânico é o aparecimento súbito de medo ou desconforto intenso que atinge um pico em poucos minutos e durante o qual pelo menos quatro de uma lista de treze sintomas ocorrem (entre eles palpitações, sensação de coração acelerado, sudorese, tremores, sensação de mal-estar cardíaco ou abdominal, medo de morrer, entre eles). Essas crises podem vir do nada e duram em média vinte minutos. O ataque, como chegou, vai embora deixando como únicas consequências uma preocupação da pessoa em tê-los novamente o que fará recorrer a várias consultas e exames médicos em busca de alguma explicação e o evitamento de lugares ou situações onde ele ocorreu (por exemplo, um lugar público).
      Interessantemente, a prevalência deste transtorno varia bastante entre as populações estudadas. Enquanto ele pode atingir de 2-3% dos povos norte-americanos e europeus, suas estimativas descem para 0,1 para 0,8% em povos asiáticos, africanos e latino-americanos. No Brasil a prevalência estaria em torno de 1,6% da população. Esta diferença aponta para importantes fatores sócio culturais afetando o aparecimento deste problema emocional. 
      Quase não se falava de transtorno do pânico entre os profissionais de saúde mental antes do início dos anos 90, ainda que se constasse nos livros com outros nomes (“neurose de angústia”, “síndrome de da Costa”, etc.), quando a classificação americana de psiquiatria (DSM – III) chegou no Brasil. Talvez por que não fosse reconhecido. De qualquer forma, hoje em dia, é um dos problemas mais comuns que chegam nos consultórios psiquiátricos.
      Tem tratamento, sim! A maioria dos pacientes melhoram com medicamentos e psicoterapia após alguns meses de acompanhamento. A queixa dos que melhoram é (nas palavras de um paciente): “o danado é que esse troço custoso sempre pode voltar!”.`
    }
  ];

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
