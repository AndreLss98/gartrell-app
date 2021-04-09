import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { NoticiasService } from './noticias.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasResolver implements Resolve<any> {

  constructor(private noticiaService: NoticiasService) { }

  resolve() {
    return this.noticiaService.getNoticias(1);
  }
}
