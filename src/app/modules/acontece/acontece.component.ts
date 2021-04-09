import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AconteceService } from './acontece.service';

@Component({
  selector: 'app-acontece',
  templateUrl: './acontece.component.html',
  styleUrls: ['./acontece.component.scss']
})
export class AconteceComponent implements OnInit {

  private _qtdPages: number = 1;

  constructor(
    public route: ActivatedRoute,
    public aconteceService: AconteceService,
  ) { }

  ngOnInit(): void {
    this.aconteceService.eventos = this.route.snapshot.data.acontecimentos.dados;
  }

  public get qtdPages(): number {
    return this._qtdPages;
  }
  public set qtdPages(value: number) {
    this._qtdPages = value;
  }

  onChangePages(data: any) {
    this.aconteceService.getEventos(data.currentPage).subscribe((response: any) => {
      this.aconteceService.eventos = response.dados;
      this.qtdPages = response.quantidadeDePaginas;
    });
  }
}
