import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private _menu: any[] = [];

  constructor(private router: Router) {

    this.menu = [
      { name: "Institucional", link: "", subMenus: [
        { name: "Identidade Nominal", link: "", subMenus: [] },
        { name: "Quem somos", link: "institucional/quem-somos", subMenus: []},
        { name: "Equipe", link: "", subMenus: [
          { name: "Instituto Gartrell", link: "institucional/equipe#equipe", subMenus: []},
          { name: "Parceiros e Colaboradores", link: "institucional/equipe#parceiros", subMenus: []}
        ] },
        { name: "Galeria de Fotos", link: "", subMenus: [] },
        { name: "Links úteis", link: "", subMenus: [] }
      ]},
      { name: "Serviços", link: "", subMenus: [
        { name: "Psiquiatria", link: "servicos/1", subMenus: [] },
        { name: "Psicologia", link: "servicos/2", subMenus: [] },
        { name: "Neuropsicologia", link: "servicos/3", subMenus: [] },
        { name: "Grupos de suporte e crescimento pessoal", link: "servicos/4", subMenus: [] },
        { name: "Capacitações", link: "servicos/5", subMenus: [] },
        { name: "Consultoria", link: "servicos/6", subMenus: [] },
        { name: "Parcerias ou Acordos de Cooperação em Serviços, Atividades e Projetos", link: "servicos/7", subMenus: [] }
      ]},
      { name: "Acontece", link: "acontece", subMenus: [] },
      { name: "Notícias", link: "noticias", subMenus: [] },
      { name: "Reflexões", link: "reflexoes", subMenus: [] },
      { name: "Fique por Dentro", link: "", subMenus: [
        { name: "Saúde Integral", link: "fique-por-dentro/saude-integral", subMenus: [] },
        { name: "Desenvolvimento humano", link: "fique-por-dentro/desenvolvimento-humano", subMenus: [] },
        { name: "Sociedade", link: "fique-por-dentro/sociedade", subMenus: [] }
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

  goToTerapiaOnline(){
    this.router.navigateByUrl("/terapia-online")
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
