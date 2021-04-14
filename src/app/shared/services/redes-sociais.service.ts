import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedesSociaisService {

  private _facebook: string = '';
  private _instagram: string = '';
  private _twitter: string = '';
  private _linkdin: string = '';
  private _youtube: string = '';
  private _numero_whatsapp: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${environment.wpBaseUrl}/redessociais`);
  }

  public get facebook(): string {
    return this._facebook;
  }
  public set facebook(value: string) {
    this._facebook = value;
  }

  public get instagram(): string {
    return this._instagram;
  }
  public set instagram(value: string) {
    this._instagram = value;
  }

  public get twitter(): string {
    return this._twitter;
  }
  public set twitter(value: string) {
    this._twitter = value;
  }

  public get linkdin(): string {
    return this._linkdin;
  }
  public set linkdin(value: string) {
    this._linkdin = value;
  }

  public get youtube(): string {
    return this._youtube;
  }
  public set youtube(value: string) {
    this._youtube = value;
  }

  public get numero_whatsapp(): string {
    return this._numero_whatsapp;
  }
  public set numero_whatsapp(value: string) {
    this._numero_whatsapp = value;
  }
}
