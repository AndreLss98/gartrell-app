import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria } from 'src/app/models/galeria-foto.model';

@Component({
  selector: 'app-galeria-details',
  templateUrl: './galeria-details.component.html',
  styleUrls: ['./galeria-details.component.scss']
})
export class GaleriaDetailsComponent implements OnInit {

  private _galeria: Galeria;
  private _selectedImg: number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.galeria = this.route.snapshot.data.galeria;
  }

  public get galeria(): Galeria {
    return this._galeria;
  }
  public set galeria(value: Galeria) {
    this._galeria = value;
  }

  public get selectedImg(): number {
    return this._selectedImg;
  }
  public set selectedImg(value: number) {
    this._selectedImg = value;
  }

  selectImg(data: any) {
    this.selectedImg = data.currentPage - 1;
  }

}
