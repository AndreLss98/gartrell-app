import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { AconteceService } from '../acontece/acontece.service';
import { ReflexoesService } from '../reflexoes/reflexoes.service';
import { ServicosService } from '../servicos/servicos.service';

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
    public equipeService: EquipeService,
    public servicosService: ServicosService,
    public aconteceService: AconteceService,
    public reflexoesService: ReflexoesService,
  ) { }

  ngOnInit(): void {

    this.equipe = this.equipeService.equipeInterna.filter(membro => membro.img && membro.interno);

    this.noticias = [
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' }
    ]
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

  viewReflection(post: any) {
    return () => {
      this.reflexoesService.selectedReflection = post;
      setTimeout(() => {
        this.router.navigateByUrl('/reflexoes').then(() => {
          setTimeout(() => {
            window.location.href = `${window.location.pathname}#PostDetail`;
          }, 200);
        })
      }, 200)
    }
  }
}
