import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReflexoesService {

  private _reflexoes: any[] = [
    {
      titulo: 'A Midiatização da Nossa Vida Pessoal!',
      resumo: 'A atualização contínua das Redes Sociais com seus novos e sofisticados aplicativos, vem aprimorando e potencializando a comunicação e a interação em tempo real dos internautas nas diversas comunidades online.',
      autor: 'Elóide Alves de Aquino Botelho',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `A atualização contínua das Redes Sociais com seus novos e sofisticados aplicativos, vem aprimorando e potencializando a comunicação e a interação em tempo real dos internautas nas diversas comunidades online. 
      As Redes Sociais é considerada pelas comunidades online, sua maior e mais importante praça pública social. Nela seus usuários postam suas ideias, opiniões, vivências pessoais, sociais, acadêmicas, profissionais, religiosas, etc.  
      Um fenômeno global, que vem sendo bem e mal utilizado. Isto por que, um grande número de internautas parece apresentar elevada dificuldade em estabelecer critérios e limites para suas publicações, principalmente no que tange à exposição de sua vida íntima. 
      Devido a este déficit de autocrítica, tais pessoas tornam público o que jamais deveria sair do âmbito particular. Além do excesso de postagens, a grande maioria repetitivas e inúteis. 
      Os estudiosos da saúde mental, consideram muito grave este problema da midiatização da nossa vida pessoal no universo virtual. Segundo eles, vida virtual em excesso, assim como álcool e drogas, pode viciar e em condição preocupante, levar o internauta à abstinência, requerendo quase sempre tratamento especializado. 
      Felizmente, as comunidades online são povoadas por internautas saudáveis, que utilizam as mídias para comunicação, interação e entretenimento inteligente, onde a cultura entre as pessoas é vivenciada e compartilhada de forma construtiva e educativa. 
      Quando devidamente utilizados, tais espaços nos permitem vivenciar à distância experiências impossíveis de ocorrer no plano presencial. Citando um exemplo por mim vivenciado entre os dias 16 a 19 de novembro deste ano. Acompanhei aqui de Goiânia, via Facebook, o XXXIV Congresso Brasileiro de Psiquiatria – CBP, realizado no Transamérica Expo Center em São Paulo. Via web, assisti em tempo real, o que os congressistas assistiram no modo presencial. 
      Nossas comunidades online serão infinitamente melhores, mais interessantes e mais saudáveis, à medida que cada um de nós, aprendermos a submeter todas as nossas postagens gerais e pessoais a uma qualificada análise. Assim evitaremos excessos e exposições, algo quem esvaziando significativamente o valor das nossas praças públicas virtuais.    
      Encorajo a mim e a você ao zeloso cuidado de praticarmos a Etiqueta Social no Universo Virtual. Nosso mundo será melhor e nossas comunidades online serão de fato uma praça pública que vale a pena frequentar. Ser e fazer diferença nas Redes Sociais, vale a pena e deve começar comigo e com você. Que eu e você, jamais nos incorramos neste grave erro de midiatizar a nossa vida pessoal.`,
      categoria: 'Nome da Categoria'
    },
    {
      titulo: 'Fortaleça as Suas Resoluções',
      resumo: 'Nestes conturbados dias, quando nosso país vive uma grande e grave crise político-ideológica, econômica, social, cultural, educacional, etc., potencializada pela expansão exponencial da COVID-19, em todo o território nacional, é natural e inevitável que todos nós cidadãos sejamos de alguma modo e intensidade, direta ou indiretamente afetados.',
      autor: 'Elóide Alves de Aquino Botelho',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Nestes conturbados dias, quando nosso país vive uma grande e grave crise político-ideológica, econômica, social, cultural, educacional, etc., potencializada pela expansão exponencial da COVID-19, em todo o território nacional, é natural e inevitável que todos nós cidadãos sejamos de alguma modo e intensidade, direta ou indiretamente afetados. 
      O isolamento social a que fomos submetidos e que ainda o guardamos, tem exigido uma variedade de mudanças e adaptações de todos nós, em todas as áreas da nossa vida. Em alguns os aspectos as mudanças tem sido radicais, em outras a orientação é por suspensão, realinhamento, e, seguramente há o que abandonar, o que não abandonar e o que acrescentar. 
      As pessoas que tem por orientação pessoal conduzirem suas vidas por meio de metas, objetivos, planos de ação, agenda de trabalho, valorizam muito o planejamento, a reflexão, o estudo, a análise, etc., separam tempo para isso, buscam novos conhecimentos, conselhos, para as suas intenções, não fiquem apenas em resoluções, mas, transformem-se em ações.
      Para isso separam tempo diário, semanal, mensal, semestral e anual para auto análise, avaliação pessoal de como foi sua trajetória até o momento e como deve seguir para que se assegure seu bem estar geral, qualidade de vida e que seja exitoso (a)  em tudo o que se propôs. 
      O maior desafio deste momento de pandemia, é fortalecer nas nossas resoluções, para que não nos deixemos abalar pelos grandes desafios seja pelo abalo que nosso país vivencia pelas crises citadas, seja pela consternação que nos acomete pelo crescente número de infectados e ceifados pela COVID-19 e por outras condições de saúde.
      A mais segura maneira de fortalecer nossas resoluções, decisões, projetos, ações e mantermos o nosso foco naquilo que é de fato essencial e precioso para nós, evitando distrações, fugas, esquivas, procrastinação. Este período que atravessamos requer que sejamos maiores que o nosso próprio cansaço, abatimento, medo, insegurança, incerteza, desencanto. 
      Reconhecemos e admitimos que não nos é possível manter sempre e continuamente destacáveis no exercício prático de tais virtudes. Mas, entendemos que jamais devemos desistir de lutar, jamais. Portanto, deixo o desafio a você: FORTALEÇA AS SUAS RESOLUÇÕES E SEPARE TEMPO PARA RENOVAR SUAS FORÇAS E CONVICÇÕES PESSOAIS. Para a pessoa que teme a Deus, o encorajamento é, valorize e cultive as disciplinas espirituais. Elas são toda a diferença neste  momento.`,
      categoria: 'Nome da Categoria'
    },
    {
      titulo: 'Fortaleça as Suas Resoluções (I/III)',
      resumo: 'É comum para muitas pessoas, aproveitarem a ocasião de passagem de ano e entrada do ano novo, para refletir sobre suas vidas, suas jornadas, projetos, desejos, realizações, etc. Este momento é sempre acompanhado de resoluções, sejam pequenas ou grandes, no âmbito pessoal ou profissional.',
      autor: 'Elóide Alves de Aquino Botelho',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `É comum para muitas pessoas, aproveitarem a ocasião de passagem de ano e entrada do ano novo, para refletir sobre suas vidas, suas jornadas, projetos, desejos, realizações, etc. Este momento é sempre acompanhado de resoluções, sejam pequenas ou grandes, no âmbito pessoal ou profissional. 
      Há pessoas, cujo perfil é dado ao planejamento, e neste sentido, algumas são muito cuidadosas, criteriosas, algo elogiável quando alinham intensão e resolução. 
      Todos nós sabemos que um excelente Projeto e Planejamento pessoal, busca considerar uma série de marcadores, variáveis em amplos aspectos, para que possa de fato tornar-se uma proposta realizável e tangencial. Também sabemos que por mais cuidadosos que sejamos, sempre haverá variáveis que fogem do nosso domínio. E, o que podemos fazer é nos preparar no sentido de saber lidar com o improvável, inevitável, etc.
      A pandemia global, ocasionada pela COVID-19, é um exemplo de que por mais preparado que estejamos, é possível sermos surpreendido com algo inimaginável, surreal. Todavia, quando nos propomos a ser, viver, agir de forma afirmativa, propositiva, confiante, humilde, resiliente, com simplicidade de coração, flexibilidade de pensamento, abertura para a vida, para mudanças e adaptações, situações adversas como a que estamos enfrentando, tem impacto mais reduzido em nosso emocional e são mais rapidamente elaboradas e encaradas. 
      Pense nas resoluções que você firmou em sua mente e coração, tanto as antigas, de passagem de ano e início do isolamento social. Como está seu compromisso em relação à realização de cada uma delas? Está satisfeito com o que tem feito? O que o (a) tem impedido de avançar?
      Encorajamento: Se por algum motivo, está se distanciando de seus sonhos, projetos e realizações, separe um tempo ainda hoje e retome de onde parou. Jamais desista daquilo que você deseja alcançar e não permita ser neutralizado pelas circunstâncias.`,
      categoria: 'Nome da Categoria'
    },
    {
      titulo: 'G-Além da medicina',
      resumo: 'Minha amiga tinha me pedido para preparar sua paciente para a delicada cirurgia que ela, como cirurgiã de cabeça e pescoço, faria em seguida.  Um câncer no rosto exigia a retirada de um dos olhos de D. Maria, e ninguém sabia como ela reagiria depois.  Agora, ela parecia aceitar tudo com muita coragem, mas todos desconfiavam do seu excesso de aceitação, parecendo ter deixado suas emoções trancafiadas em algum compartimento secreto, sem permitir que se mostrassem.',
      autor: 'Eleny Vassão',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Minha amiga tinha me pedido para preparar sua paciente para a delicada cirurgia que ela, como cirurgiã de cabeça e pescoço, faria em seguida.  Um câncer no rosto exigia a retirada de um dos olhos de D. Maria, e ninguém sabia como ela reagiria depois.  Agora, ela parecia aceitar tudo com muita coragem, mas todos desconfiavam do seu excesso de aceitação, parecendo ter deixado suas emoções trancafiadas em algum compartimento secreto, sem permitir que se mostrassem.
      - Faço qualquer coisa, contanto que possa estar no casamento da minha filha, dizia Dona Maria animada.
        A cirurgia transcorreu bem, e a paciente parecia recuperar-se rapidamente.  Mas, a partir do terceiro dia, ao cair da tarde, começou a ter uma grande sonolência, entrando num estado comatoso, que durava até a manhã seguinte. Não se comunicava mais com ninguém.  O período do coma foi se ampliando dia a dia, até que ela parecia que não conseguiria mais voltar à consciência. Psiquiatras, psicólogos, médicos de diversas outras especialidades foram chamados, mas sem qualquer resultado: D. Maria não reagia a nada!
        Eu a visitava diariamente, orando e lendo um pequeno texto bíblico de esperança ao seu ouvido, mas naquela manhã foi diferente.  Ela ouvira a mensagem que eu lhe trouxera sobre o Deus que sabia da sua dor, e que lhe permitia chorar e questionar, aconchegando-se em Seu colo. Então, de repente, uma lágrima escorreu por sua face. Aos poucos, D. Maria abriu os olhos e logo começou a balbuciar, perguntando-me se Ele podia ouvir o seu choro e curar a sua alma ferida.  Eu disse que sim, e lhe contei como ela poderia ter um relacionamento com Deus, através da pessoa de Cristo, e ela decidiu convidá-Lo para assumir o controle da sua vida, pudesse ou não realizar seu maior sonho, que era ir ao casamento da filha.
        Lembro-me do último dia da D. Maria no hospital, toda animada saindo ao lado da filha querida, que conversava com ela sobre a roupa que vestiria em seu casamento. Lançou-me um olhar agradecido, antes de deixar a enfermaria. Que alegria ver que a sua alma havia sido curada, e por isso ela poderia enfrentar o que viesse à frente, com a certeza de que o Senhor caminhava com ela!
        “Bem-aventurado o homem cuja força está em Ti, em cujo coração estão os caminhos aplanados. Quando passa pelo vale árido, faz dele um manancial; de bênçãos o cobre a primeira chuva... Porque o Senhor Deus é sol e escudo; o Senhor dá graça e glória; não recusa nenhum bem aos que andam retamente. Ó Senhor dos Exércitos, feliz é aquele que em Ti confia.” Sl. 84:5,6,11,12`,
      categoria: 'Nome da Categoria'
    },
    {
      titulo: 'Quando você deve procurar ajuda especializada em saúde mental?',
      resumo: 'Quando você perceber que alguma dificuldade, já está o (a) atingindo de forma desproporcional ao que você comumente vivencia e está te prejudicando em uma ou mais áreas de sua vida, causando-lhe prejuízos ou limitações e você, de forma diligente, já fez tudo o que estava a seu alcance. Sim, este é o momento que você deve sabiamente procurar ajuda.',
      autor: 'Elóide Alves de Aquino Botelho',
      dataPost: new Date(),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Quando você perceber que alguma dificuldade, já está o (a) atingindo de forma desproporcional ao que você comumente vivencia e está te prejudicando em uma ou mais áreas de sua vida, causando-lhe prejuízos ou limitações e você, de forma diligente, já fez tudo o que estava a seu alcance. Sim, este é o momento que você deve sabiamente procurar ajuda.
      Os que atuam na área da saúde, sabem que um incontável número de pessoas em nossos lares, no trabalho, nas empresas e na sociedade em geral, vivencia situações e momentos, que requerem avaliação e intervenção especializada na área da saúde mental. Um grande problema social de resposta multifatorial e multicausal. 
      Assim sendo, aconselho a você (caso esteja precisando) a não negar ou adiar a procura de especializada seja para você ou familiar. Também o (a) encorajo a indica-la a um (a) amigo (a), colega ou pessoa próxima a você. 
      Abaixo apresento, duas importantes especialidades em saúde mental, que você pode recorrer ou indicar:
      Psiquiatria: Especialidade médica voltada para atender, diagnosticar, tratar, reabilitar e acompanhar pessoas que lidam com diferentes formas de sofrimento psíquico ou mental, sejam elas de base orgânica ou funcional, com manifestações leves, moderadas ou graves, em situações de crises agudas ou crônicas. 
      O psiquiatra tem a responsabilidade de diagnosticar, indicar as diferentes abordagens terapêuticas, conduzir e acompanhar a terapia medicamentosa, quando prescrita ao paciente.  Mais do que tratar doenças, o psiquiatra cuida de pessoas. 
      Psicologia: Especialidade da saúde mental, voltada para a investigação e compreensão de todos os processos mentais relativos ao funcionamento psíquico e neuropsíquico do ser humano, bem como os processos socioculturais, fisiológicos e biológicos que os acompanham.   
      O psicólogo tem a tarefa de investigar as causas subjacentes que envolvem ou estão na base dos problemas, dificuldades ou adoecimento das pessoas.  Também, busca valorizar, estimular e ampliar todo o potencial humano do paciente ou cliente.  
      SE PRECISAR DE AJUDA, PROCURE UMA DESTAS ESPECIALIDADES!
      ESTA É UMA SÁBIA DECISÃO, UMA ACERTADA ESCOLHA.`,
      categoria: 'Nome da Categoria'
    }
  ];

  private _selectedReflection: any;

  constructor() { }

  public get reflexoes(): any[] {
    return this._reflexoes;
  }

  public set reflexoes(value: any[]) {
    this._reflexoes = value;
  }

  public getReflexoes() {
    return of(this.reflexoes);
  }

  public get selectedReflection(): any {
    return this._selectedReflection;
  }

  public set selectedReflection(value: any) {
    this._selectedReflection = value;
  }
}
