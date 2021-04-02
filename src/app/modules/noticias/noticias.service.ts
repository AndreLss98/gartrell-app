import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private _noticias: any[] = [
    {
      titulo: 'O Novo Site do Instituto Gartrell',
      resumo: 'Para o Instituto Gartrell, “toda a verdade é verdade de Deus” em todas as áreas do conhecimento humano. Por meio desta premissa, Instituto também declara que reconhece a existência, o valor, a especificidade, o papel, a finalidade e a indispensável contribuição da ciência na história humana, mediante a estruturação do pensamento e do conhecimento científico, visando o mais amplo bem da humanidade.',
      autor: 'Elóide Alves de Aquino Botelho',
      dataPost: new Date(2021, 4, 0),
      banner: 'assets/home/noticias/image_placeholder.jpg',
      text: `Para o Instituto Gartrell, “toda a verdade é verdade de Deus” em todas as áreas do conhecimento humano. Por meio desta premissa, Instituto também declara que reconhece a existência, o valor, a especificidade, o papel, a finalidade e a indispensável contribuição da ciência na história humana, mediante a estruturação do pensamento e do conhecimento científico, visando o mais amplo bem da humanidade. 

      O site, as redes sociais e canal do YouTube do Instituto o Gartrell, que compõem a empresa virtual são destinados ao fomento e difusão da ciência voltada para o ser humano integral e sua relação com o meio em que vive, sendo a primeira modalidade virtual (site), o principal canal de comunicação da instituição com o seu público e usuários. 
      
      Os serviços e conteúdos produzidos pelo Instituto Gartrell, são preferencialmente voltados para a promoção da saúde mental/saúde integral do ser humano. Em função de sua proposta integrativa dos diversos saberes científicos, é interesse imediato da instituição promover a vida e o cotidiano das pessoas em sociedade, por meio da interface de saberes ligados à educação, teologia, cultura, cidadania, trabalho, entretenimento, descanso e lazer, dentre outros temas e assuntos de humanidades, sempre estabelecendo a devida integração entre a ciência e a fé cristã, conforme a especificidade, o papel e a contribuição de cada uma. 
      
      Ao integrar a verdade da revelação geral, a Ciência e a Fé Cristã, o Instituto Gartrell acredita poder honrar ao Criador e à criatura na prestação dos seus serviços à sociedade contribuindo, assim, para o cumprimento de sua missão: servir pessoas, promovendo a sua saúde integral. 
      
      Por meio de seu site o Instituto Gartrell objetiva:    
      Comunicar de forma direta e contínua com o seu público alvo e com a sociedade em geral, possibilitando-lhes acesso rápido a seus serviços e atividades.
      Disseminar o conhecimento científico teórico-prático alinhado à fé cristã, com foco no desenvolvimento global do ser humano, na sua saúde integral/saúde mental, numa linguagem simples e acessível às pessoas.
      Promover a educação, a cultura, a cidadania e o trabalho, por meio da celebração, do exemplo e do encorajamento às pessoas, ao cultivo e prática dos valores nobres e elevados da ética universal e da fé cristã bíblica, como forma de contribuir socialmente com a comunidade a que destina seus serviços e ações. 
      Divulgar conteúdos, links, informações, notícias, artigos, eventos e outras atividades das instituições parceiras do Instituto ou que se relacionam com a sua missão e proposta de trabalho.  
      
      Um projeto intuitivo, ao se verificar que a faixa de menus e respectivas sessões foram cuidadosa, criteriosa e   didaticamente estruturadas e organizadas, permitindo ao usuário acessar todos os conteúdos de forma simples, prática e rápida. Um site autoexplicativo e funcional.   
      
      Sua Home Page (página de abertura), é um convite ao usuário para um passeio pelas diversas sessões e subseções, devido a beleza das imagens, da disposição dos conteúdos, e, sobretudo da relevância, consistência e atualidade com que os assuntos e temas são desenvolvidos. Outros valores agregados e facilmente identificáveis são: beleza, qualidade, estética, suavidade, praticidade, organização, significado, informação etc.  
      
      Cada sessão tem a sua finalidade específica, abrigando do mesmo modo suas subseções, tais como:   
      Institucional: Informações sobre a identidade nominal da empresa; quem somos; missão, visão, valores; declaração de fé; equipe profissional; galeria de fotos, etc.
      Acontece: Divulgação das atividades e eventos do Instituto, bem como de instituições com as quais mantém contato, parceria ou de importância para a sua comunidade, dentro das áreas de sua atuação e interesse.  
      Notícias: Atualidades nas áreas de interesse do Instituto que acontece no Brasil e no Mundo e que valem a pena receber destaque no espaço virtual do Instituto Gartrell.  
      Reflexões: Textos com reflexões de caráter prático em assuntos, temas e situações do cotidiano das pessoas, sempre com encorajamento como forma de promoção da vida, do ser humano, da saúde, do bem estar geral e qualidade de vida. 
      Fique por dentro - Saúde Integral: Conteúdos que abordam o desenvolvimento global do ser humano, do cérebro (neurociências), da saúde geral e mental das pessoas em sua vida intra e extra psíquica.  
      Fique por dentro - Desenvolvimento humano: Conteúdos ligados ao desenvolvimento e crescimento pessoal das pessoas em suas diversas dimensões, em especial no mundo das profissões, do trabalho e carreira. Abordará a questão do Mercado de Trabalho, Empreendedorismo, Projeto de Vida, etc. dentro da visão cristã bíblica. 
      Fique por dentro - Sociedade: Assuntos e temas considerados relevantes pelo Instituto Gartrell, nas áreas das ciências humanas e sociais, que destacam a vida em sociedade, a educação, o direito, cultura, a ética e cidadania, família, gente que faz, cuidado com o outro, etc., numa abordagem acessível e prática para as pessoas, segundo a fé cristã. 
      Serviços: O portfólio que contempla todo trabalho oferecido e desenvolvido pelo Instituto na sociedade e junto ao seu público alvo. 
      Contato: Espaço reservado ao público para comunicação do público com o Instituto.
       Consulte conosco:  Espaço com o nome dos profissionais, áreas de atuação e disponibilidade de horários de atendimento. 
       Links Úteis: Endereços eletrônicos das páginas de sites ligados às diversas áreas de interesse do Instituto Gartrell 
      
      Este site foi concebido pela psicóloga Elóide Botelho e desenvolvido/mantido pela Social Média, na pessoa do João Paulo Fabino, autor e responsável por este brilhante trabalho. Todo o conteúdo do site é desenvolvido pela Equipe Profissional do Instituto Gartrell e muitos colaboradores voluntários de todo os cantos do Brasil, alguns de renomadas instituições do país. São profissionais com elevada formação teórica, destacável atuação e experiência profissional e elogiável conduta ética, vivencial e relacional, em sua grande maioria com a mesma orientação e confissão de fé deste Instituto e outros, que embora de outra confissão, são pessoas das quais a instituição tem o maior apreço, respeito, confiança e referência para se servir de suas contribuições e indica-las a outros.  
      
      O Instituto Gartrell, é incansável na busca por oferecer à sociedade um trabalho de excelência. Espera-se, portanto, que este site cumpra o objetivo para o qual fora criado. Espera-se também que os seus usuários façam valioso proveito de tudo que ele lhes oferece, e, como gesto de parceria digira aos responsáveis por este veículo de comunicação sugestões, críticas e contribuições, sempre de forma encorajadora e como gesto de generosidade o divulguem que ele possa alcance o maior número de pessoas e, assim, de fato faça valer a sua existência. Gratidão, hoje e sempre.`,
      categoria: 'Nome da Categoria'
    }
  ];

  constructor() { }

  public getNoticias() {
    return of(this.noticias);
  }

  public get noticias(): any[] {
    return this._noticias;
  }

  public set noticias(value: any[]) {
    this._noticias = value;
  }
}
