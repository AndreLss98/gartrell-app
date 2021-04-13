import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DesenvolvimentoHumanoService } from './desenvolvimento-humano.service';

@Injectable({
  providedIn: 'root'
})
export class PostsDesenvolvimentoHumanoResolver implements Resolve<any> {

  constructor(
    private desenvolvimentoHumanoService: DesenvolvimentoHumanoService
  ) { }

  resolve() {
    return this.desenvolvimentoHumanoService.getPosts(1);
  }
}
