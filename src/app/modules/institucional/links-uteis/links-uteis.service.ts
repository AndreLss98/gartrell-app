import { Injectable } from '@angular/core';

import { LinkUtil } from 'src/app/shared/models/links-uteis.model';

@Injectable({
  providedIn: 'root'
})
export class LinksUteisService {

  private _linksUteis: LinkUtil[] = [
    { nome: 'Artmed Editora', link: 'http://www.estantevirtual.com.br/editora/Artmed' },
    { nome: 'Associação Brasileira de Medicina e Psicologia Comportamenta', link: 'http://abpmc.org.br' },
    { nome: 'Associação Brasileira de Psicologia Escolar e Educacional (ABRAPEE)', link: 'http://www.abrapee.psc.br' },
    { nome: 'Associação Brasileira de Psicologia Organizacional e do Trabalho', link: 'http://www.sbpot.org.br/home' },
    { nome: 'Associação Brasileira de Pós-Graduação em Saúde Coletiva (ABRASCO)', link: 'https://www.abrasco.org.br' },
    { nome: 'Associação Brasileira de Saúde Mental', link: 'https://www.abrasme.org.br' },
    { nome: 'Associação Brasileira de Psiquiatria', link: 'https://www.abp.org.br' },
    { nome: 'Associação Brasileira de Psicologia da Saúde (ABPSA)', link: 'https://abpsa.org.br' },
    { nome: 'Sociedade Brasileira de Psicodrama: Federação Brasileira de Psicodrama (FEBRAP)', link: 'https://febrap.org.br/site' },
    { nome: 'Associação Brasileira de Psicodrama e Sociodrama (ABPS)', link: 'http://abps.com.br/a-abps' },
    { nome: 'Associação Brasileira de Gestalt Terapia e Abordagem Gestáltica (ABG)', link: 'http://www.gestalt.com.br' },
    { nome: 'Sociedade Goiana de Psicodrama (SOGEP)', link: 'http://blogsogep.wixsite.com/sogep' },
    { nome: 'Associação Brasileira de Psicopedagogia', link: 'http://www.abpp.com.br' },
    { nome: 'Associação Brasileira de Psicomotricidade (ABP)', link: 'https://psicomotricidade.com.br' },
    { nome: 'Associação Brasileira de Recursos Humanos (ABRH)', link: 'https://www.abrhbrasil.org.br' },
    { nome: 'Associação Brasileira de Filosofia e Psicanálise (ABRAFP)', link: 'https://www.abrafp.org' },
    { nome: 'Federação Brasileira de Psicanálise (FEBRAPSI)', link: 'https://www.febrapsi.org' },
    { nome: 'Associação Brasileira de Psicologia do Esporte (ABRAPESP)', link: 'http://www.abrapesp.org.br' },
    { nome: 'Associação Brasileira de Psicologia Social (ABRPSO)', link: 'https://www.abrapso.org.br' },
    { nome: 'Associação Nacional de Psicanálise (ANPC)', link: 'http://www.anpc.com.br' },
    { nome: 'Associação Brasileira de Psicologia Jurídica (ABPJ)', link: 'http://www.abpj.org.br' },
    { nome: 'Associação Brasileira de Psicologia Positiva (ABP+)', link: 'http://abp-positiva.org' },
    { nome: 'Sociedade Brasileira de Psicologia Hospitalar (SBPH)', link: 'http://www.sbph.org.br' },
    { nome: 'Ministério da Saúde do Governo Federal', link: 'http://www.minsaude.gov.cv' },
    { nome: 'Instituto Brasileiro de Avaliação Psicológica (IBAP)', link: 'http://www.ibapnet.org.br' },
    { nome: 'Corpo de Psicólogos e Psiquiatras Cristãos (CPPC)', link: 'https://cppc.org.br' },
    { nome: 'Conselho Federal de Psicologia', link: 'https://site.cfp.org.br' },
    { nome: 'Conselho Regional de Psicologia / 9ª Região', link: 'http://www.crp09.org.br' },
    { nome: 'Periódicos eletrônicos em Psicologia', link: 'http://pepsic.bvsalud.org/scielo.php?lng=en' },
    { nome: 'Portal do Psicólogo', link: 'http://www.psicologia.pt' },
    { nome: 'Revista Brasileira de Terapia Comportamental e Cognitiva', link: 'http://www.usp.br/rbtcc' },
    { nome: 'Serviço Brasileiro de Apoio às Micro e Pequenas Empresas (Sebrae)', link: 'http://www.sebrae.com.br' },
    { nome: 'Sociedade Brasileira de Psicologia', link: 'http://www.sbponline.org.br' },
    { nome: 'Vetor Editora', link: 'http://www.vetoreditora.com.br' },
    { nome: 'Associação Brasileira de Qualidade de Vida (ABQV)', link: 'http://www.abqv.org.br' },
    { nome: 'Federação Brasileira de Terapias Cognitivas (FBTC)', link: 'http://www.fbtc.org.br' },
    { nome: 'Associação Brasileira de Psicoterapia Cognitiva (ABPC)', link: 'www.abpcbrasil.com.br' },
    { nome: 'Associação Brasileira de Psicoterapia (ABRAP)', link: 'http://www.abrap.org' },
    { nome: 'Associação Latino Americana de Psicoterapias Cognitivas (ALAPCO)', link: 'http://www.alapco.com' }
  ];

  constructor() { }
  
  public get linksUteis(): LinkUtil[] {
    return this._linksUteis;
  }
  public set linksUteis(value: LinkUtil[]) {
    this._linksUteis = value;
  }
}
