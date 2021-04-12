import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GaleriaFotosService } from './galeria-fotos.service';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss']
})
export class GaleriaFotosComponent implements OnInit {

  private _qtdPages: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public galeriaFotosService: GaleriaFotosService
  ) { }

  ngOnInit(): void {
    this.galeriaFotosService.galerias = this.route.snapshot.data.galerias.dados;
    this.qtdPages = this.route.snapshot.data.galerias.quantidadeDePaginas;
  }

  public get qtdPages(): number {
    return this._qtdPages;
  }
  public set qtdPages(value: number) {
    this._qtdPages = value;
  }

  viewGaleria(galeriaId: number) {
    this.router.navigateByUrl(`institucional/galeria-fotos/${galeriaId}`);
  }
}
