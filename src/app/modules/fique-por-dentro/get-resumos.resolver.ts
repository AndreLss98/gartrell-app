import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetResumosResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }

  resolve() {
    return this.http.get(`${environment.wpBaseUrl}/resumofiquepordentro`)
  }
}
