import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';

import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  private _pageNumber: number = 1;
  private _filteredList: Post[] = [];
  
  constructor(
    private route: ActivatedRoute,
    public noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.noticiasService.noticias = this.route.snapshot.data.noticias.dados;
    this.filteredList = this.noticiasService.noticias;
  }

  public get pageNumber(): number {
    return this._pageNumber;
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }

  public get filteredList(): Post[] {
    return this._filteredList;
  }
  public set filteredList(value: Post[]) {
    this._filteredList = value;
  }

  public createFunction(noticia: Post) {
    return () => {
      this.noticiasService.selectedNoticia = noticia;
      this.filteredList = this.noticiasService.noticias.filter(post => post.id !== noticia.id);

      setTimeout(() => {
        window.location.href = `${window.location.pathname}#PostDetail`;
      }, 200);
    }
  }

  public onChangePage(data: any) {
    this.noticiasService.getNoticias(data.currentPage).subscribe((response: any) => {
      this.filteredList = this.noticiasService.noticias = response.dados;
      this.noticiasService.selectedNoticia = (null as any);
    });
  }
}
