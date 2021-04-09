import { Component, OnInit } from '@angular/core';
import { ReflexoesService } from './reflexoes.service';

import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reflexoes',
  templateUrl: './reflexoes.component.html',
  styleUrls: ['./reflexoes.component.scss']
})
export class ReflexoesComponent implements OnInit {

  public callFunction: any;
  private _qtdPages: number = 1;

  constructor(
    private routes: ActivatedRoute,
    public reflexoesService: ReflexoesService
  ) { }

  ngOnInit(): void {
    this.reflexoesService.reflexoes = this.routes.snapshot.data.reflexoes.dados;
    this.qtdPages = this.routes.snapshot.data.reflexoes.quantidadeDePaginas;
  }


  public get qtdPages(): number {
    return this._qtdPages;
  }
  public set qtdPages(value: number) {
    this._qtdPages = value;
  }

  public createFunction(reflection: Post) {
     return () => {
      this.reflexoesService.selectedReflection = reflection;
      setTimeout(() => {
        window.location.href = `${window.location.pathname}#PostDetail`;
      }, 200);
    }
  }

  public onChangePage(data: any) {
    this.reflexoesService.getReflexoes(data.currentPage).subscribe((response: any) => {
      this.reflexoesService.reflexoes = response.dados;
    });
  }
}
