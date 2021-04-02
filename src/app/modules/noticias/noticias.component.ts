import { Component, OnInit } from '@angular/core';

import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  private _noticiasSelected: any;
  
  constructor(
    public noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    
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
     }, 200)
   }
 }
}
