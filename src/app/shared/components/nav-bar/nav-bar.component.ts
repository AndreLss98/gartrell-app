import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private _menu: any[] = [];

  constructor() {

    this.menu = [
      { name: "Institucional", link: "", subMenus: [
        { name: "Identidade Nominal", link: "", subMenus: [] },
        { name: "Quem somos", link: "institucional/quem-somos", subMenus: []},
        { name: "Equipe", link: "", subMenus: [
          { name: "Instituto Gartrell", link: "institucional/equipe", subMenus: []},
          { name: "Parceiros e Colaboradores", link: "institucional/equipe", subMenus: []}
        ] },
        { name: "Galeria de Fotos", link: "", subMenus: [] },
        { name: "Links úteis", link: "", subMenus: [] }
      ]},
      { name: "Serviços", link: "", subMenus: [
        { name: "Psiquiatria", link: "servico/psiquiatria", subMenus: [] },
        { name: "Psicologia", link: "servico/psicologia", subMenus: [] },
        { name: "Neuropsicologia", link: "servico/neuropsicologia", subMenus: [] },
        { name: "Grupos de suporte e crescimento pessoal", link: "servico/grupo-suporte-crescimento-pessoal", subMenus: [] },
        { name: "Capacitações", link: "servico/capacitacoes", subMenus: [] },
        { name: "Consultoria", link: "servico/consultoria", subMenus: [] },
        { name: "Parcerias ou Acordos de Cooperação em Serviços, Atividades e Projetos", link: "servico/parceria-acordos", subMenus: [] }
      ]},
      { name: "Acontece", link: "acontece", subMenus: [] },
      { name: "Notícias", link: "noticias", subMenus: [] },
      { name: "Reflexões", link: "reflexoes", subMenus: [] },
      { name: "Fique por Dentro", link: "", subMenus: [
        { name: "Saúde Integral", link: "", subMenus: [] },
        { name: "Desenvolvimento humano", link: "", subMenus: [] },
        { name: "Sociedade", link: "", subMenus: [] }
      ]},
      { name: "Contato", link: "", subMenus: [] }
    ]
  }

  ngOnInit(): void {
    const temp = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < temp.length; ++i ) {
      temp.item(i)?.addEventListener('click', (event) => {
        event.stopPropagation();
      })
    }
  }

  public get menu(): any[] {
    return this._menu;
  }
  public set menu(value: any[]) {
    this._menu = value;
  }

  printAny(trash: any) {
    console.log('É oq tem: ', trash);
  }
}
