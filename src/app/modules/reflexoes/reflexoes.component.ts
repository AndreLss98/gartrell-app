import { Component, OnInit } from '@angular/core';
import { ReflexoesService } from './reflexoes.service';

import { Post } from 'src/app/shared/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reflexoes',
  templateUrl: './reflexoes.component.html',
  styleUrls: ['./reflexoes.component.scss']
})
export class ReflexoesComponent implements OnInit {

  public callFunction: any;
  private _qtdPages: number = 1;

  private _filteredList: Post[] = [];

  constructor(
    private routes: ActivatedRoute,
    public reflexoesService: ReflexoesService
  ) { }

  ngOnInit(): void {
    this.filteredList = this.reflexoesService.reflexoes = this.routes.snapshot.data.reflexoes.dados;
    this.qtdPages = this.routes.snapshot.data.reflexoes.quantidadeDePaginas;
  }


  public get qtdPages(): number {
    return this._qtdPages;
  }
  public set qtdPages(value: number) {
    this._qtdPages = value;
  }

  public get filteredList(): Post[] {
    return this._filteredList;
  }
  public set filteredList(value: Post[]) {
    this._filteredList = value;
  }

  public createFunction(reflection: Post) {
     return () => {
      this.reflexoesService.selectedReflection = reflection;
      this.filteredList = this.reflexoesService.reflexoes.filter(post => post.id !== reflection.id);

      setTimeout(() => {
        window.location.href = `${window.location.pathname}#PostDetail`;
      }, 200);
    }
  }

  public onChangePage(data: any) {
    this.reflexoesService.getReflexoes(data.currentPage).subscribe((response: any) => {
      this.filteredList = this.reflexoesService.reflexoes = response.dados;
      this.reflexoesService.selectedReflection = (null as any);
    });
  }
}
