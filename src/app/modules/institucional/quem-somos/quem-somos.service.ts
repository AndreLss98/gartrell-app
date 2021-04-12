import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuemSomosService {

  constructor(
    private http: HttpClient
  ) { }

  public getContent() {
    return this.http.get(`${environment.wpBaseUrl}/quemsomos`);
  }
}
