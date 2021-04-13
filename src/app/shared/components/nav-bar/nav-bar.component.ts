import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private _menu: any[] = [];

  constructor(private router: Router) {

    this.menu = [
      {
        name: "INSTITUCIONAL", link: "", subMenus: [
          { name: "Identidade Nominal", link: "institucional/identidade-nominal", subMenus: [] },
          { name: "Quem somos", link: "institucional/quem-somos", subMenus: [] },
          {
            name: "Equipe", link: "institucional/equipe", subMenus: [
              { name: "Instituto Gartrell", link: "institucional/equipe#equipe", subMenus: [] },
              { name: "Parceiros e Colaboradores", link: "institucional/equipe#parceiros", subMenus: [] }
            ]
          },
          { name: "Galeria de Fotos", link: "institucional/galeria-fotos", subMenus: [] },
          { name: "Links úteis", link: this.goToLinksUteis(), subMenus: [] }
        ]
      },
      { name: "ACONTECE", link: "acontece", subMenus: [] },
      { name: "NOTÍCIAS", link: "noticias", subMenus: [] },
      { name: "REFLEXÕES", link: "reflexoes", subMenus: [] },
      {
        name: "FIQUE POR DENTRO", link: "", subMenus: [
          { name: "Saúde Integral", link: "fique-por-dentro/saude-integral", subMenus: [] },
          { name: "Desenvolvimento humano", link: "fique-por-dentro/desenvolvimento-humano", subMenus: [] },
          { name: "Sociedade", link: "fique-por-dentro/sociedade", subMenus: [] }
        ]
      },
      {
        name: "SERVIÇOS", link: "", subMenus: [
          { name: "Psiquiatria", link: "servicos/133", subMenus: [] },
          { name: "Psicologia", link: "servicos/136", subMenus: [] },
          { name: "Neuropsicologia", link: "servicos/138", subMenus: [] },
          { name: "Grupos de suporte e crescimento pessoal", link: "servicos/139", subMenus: [] },
          { name: "Capacitações", link: "servicos/140", subMenus: [] },
          { name: "Consultoria", link: "servicos/141", subMenus: [] },
          { name: "Parcerias ou Acordos de Cooperação em Serviços, Atividades e Projetos", link: "servicos/142", subMenus: [] }
        ]
      },
      { name: "CONTATO", link: this.goToContactForm(), subMenus: [] }
    ]
  }

  ngOnInit(): void {
    const temp = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < temp.length; ++i) {
      temp.item(i)?.addEventListener('click', (event) => {
        event.stopPropagation();
      })
    }
  }

  goToTerapiaOnline() {
    this.router.navigateByUrl("/consulte-conosco")
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

  goToContactForm(): string {
    return `${window.location.pathname}#contactForm`
  }

  goToLinksUteis(): string {
    return `${window.location.pathname}#linksUteis`
  }
}
