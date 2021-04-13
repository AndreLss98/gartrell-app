import { IdentidadeNominalService } from './identidade-nominal.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdentidadeNominalResolver implements Resolve<any> {

  constructor(private identidadeNominalService: IdentidadeNominalService) { }
  
  resolve() {
    return this.identidadeNominalService.getContent();
  }
}
