import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/models/post.model';

import { AconteceService } from '../acontece/acontece.service';
import { NoticiasService } from '../noticias/noticias.service';
import { ServicosService } from '../servicos/servicos.service';
import { ReflexoesService } from '../reflexoes/reflexoes.service';
import { EquipeService } from 'src/app/shared/services/equipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _equipe: any[] = [];
  private _noticias: any[] = [];

  private _selectedMember: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public equipeService: EquipeService,
    public servicosService: ServicosService,
    public aconteceService: AconteceService,
    public noticiasService: NoticiasService,
    public reflexoesService: ReflexoesService,
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.noticiasService.noticias = this.route.snapshot.data.noticias.dados;
    this.aconteceService.eventos = this.route.snapshot.data.acontecimentos.dados;

    this.equipe = this.equipeService.equipeInterna.filter(membro => membro.interno);
  }

  public get equipe(): any[] {
    return this._equipe;
  }

  public set equipe(value: any[]) {
    this._equipe = value;
  }

  public get noticias(): any[] {
    return this._noticias;
  }

  public set noticias(value: any[]) {
    this._noticias = value;
  }

  public get selectedMember(): number {
    return this._selectedMember;
  }

  public set selectedMember(value: number) {
    this._selectedMember = value;
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

  viewReflection(post: any) {
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
