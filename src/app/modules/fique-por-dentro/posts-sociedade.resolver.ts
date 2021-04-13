import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { SociedadeService } from './sociedade.service';

@Injectable({
  providedIn: 'root'
})
export class PostsSociedadeResolver implements Resolve<any> {

  constructor(
    private sociedadeService: SociedadeService
  ) { }

  resolve() {
    return this.sociedadeService.getPosts(1);
  }
}
