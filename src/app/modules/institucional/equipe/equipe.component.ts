import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  private _colaboradores: any[] = [];
  private _internos: any[] = [];
  

  constructor(
    public equipeService: EquipeService
  ) {

  }

  ngOnInit(): void {

    this.internos = this.equipeService.equipeInterna.filter(membro => membro.interno);
    this.colaboradores = this.equipeService.equipeInterna.filter(membro => !membro.interno && membro.img);
  }

  public get colaboradores(): any[]{
    return this._colaboradores;
  }

  public set colaboradores(value: any[]) {
    this._colaboradores = value;
  }

  public get internos(): any[] {
    return this._internos;
  }

  public set internos(value: any[]) {
    this._internos = value;
  }
}
