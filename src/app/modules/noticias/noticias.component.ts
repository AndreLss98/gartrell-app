import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  private _noticiasSelected: any;
  private _pageNumber: number = 1;
  
  constructor(
    private route: ActivatedRoute,
    public noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.noticiasService.noticias = this.route.snapshot.data.noticias.dados;
  }

  public get pageNumber(): number {
    return this._pageNumber;
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }

  public get noticiasSelected(): any {
    return this._noticiasSelected;
  }
  public set noticiasSelected(value: any) {
    this._noticiasSelected = value;
  }

  public createFunction(noticia: any) {
    return () => {
      this.noticiasSelected = noticia;
      setTimeout(() => {
        window.location.href = `${window.location.pathname}#PostDetail`;
      }, 200);
    }
  }

  public onChangePage(data: any) {
    this.noticiasService.getNoticias(data.currentPage).subscribe((response: any) => {
      this.noticiasService.noticias = response.daddos;
    });
  }
}
