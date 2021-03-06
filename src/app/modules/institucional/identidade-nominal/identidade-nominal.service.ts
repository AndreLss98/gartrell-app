import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentidadeNominalService {

  constructor(private http: HttpClient) { }

  getContent() {
    return this.http.get(`${environment.wpBaseUrl}/identidadenominal`);
  }
}
