import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/models/post.model';

import { AconteceService } from '../acontece/acontece.service';
import { NoticiasService } from '../noticias/noticias.service';
import { ServicosService } from '../servicos/servicos.service';
import { ReflexoesService } from '../reflexoes/reflexoes.service';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { Servico } from 'src/app/models/servico.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _equipe: any[] = [];
  private _fiquePordentro: any[] = [];

  private _selectedMember: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public equipeService: EquipeService,
    public servicosService: ServicosService,
    public aconteceService: AconteceService,
    public noticiasService: NoticiasService,
    public reflexoesService: ReflexoesService,
  ) {
    this.fiquePordentro = [
      { id: 80, icone: 'assets/svg/saude_integral.svg', titulo: 'Saúde Integral', resumo: '', link: 'fique-por-dentro/saude-integral' },
      { id: 74, icone: 'assets/svg/desenvolvimento_humano.svg', titulo: 'Desenvolvimento Humano', resumo: '', link: 'fique-por-dentro/desenvolvimento-humano' },
      { id: 82, icone: 'assets/svg/sociedade.svg', titulo: 'Sociedade', resumo: '', link: 'fique-por-dentro/sociedade' }
    ]
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.noticiasService.noticias = this.route.snapshot.data.noticias.dados;
    this.reflexoesService.reflexoes = this.route.snapshot.data.reflexoes.dados;
    this.aconteceService.eventos = this.route.snapshot.data.acontecimentos.dados;
    this.servicosService.servicos = this.route.snapshot.data.servicos;

    this.equipe = this.equipeService.equipeInterna.filter(membro => membro.interno);
    this.fiquePordentro.forEach(page => {
      page.resumo = this.route.snapshot.data.resumosFiquePorDentro.find((resumo: any) => resumo.id === page.id).resumo
    });
  }

  public get equipe(): any[] {
    return this._equipe;
  }
  public set equipe(value: any[]) {
    this._equipe = value;
  }

  public get selectedMember(): number {
    return this._selectedMember;
  }
  public set selectedMember(value: number) {
    this._selectedMember = value;
  }

  public get fiquePordentro(): any[] {
    return this._fiquePordentro;
  }
  public set fiquePordentro(value: any[]) {
    this._fiquePordentro = value;
  }

  public nextMember() {
    if (this.selectedMember < this.equipe.length - 1) ++this.selectedMember;
  }

  public previousMember() {
    if (this.selectedMember > 0) --this.selectedMember;
  }

  viewNews(post: Post) {
    this.noticiasService.selectedNoticia = post;
    setTimeout(() => {
      this.router.navigateByUrl('/noticias').then(() => {
        setTimeout(() => {
          window.location.href = `${window.location.pathname}#PostDetail`;
        }, 200);
      })
    }, 200);
  }

  viewReflection(post: Post) {
    return () => {
      this.reflexoesService.selectedReflection = post;
      setTimeout(() => {
        this.router.navigateByUrl('/reflexoes').then(() => {
          setTimeout(() => {
            window.location.href = `${window.location.pathname}#PostDetail`;
          }, 200);
        })
      }, 200);
    }
  }
}
