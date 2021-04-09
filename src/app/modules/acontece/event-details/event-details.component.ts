import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Acontecimento } from './../../../models/acontece.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private _evento: Acontecimento;
  private _selectedPalestrante: number = 1;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.evento = this.route.snapshot.data.evento;
    this.configContent();
  }

  public get selectedPalestrante(): number {
    return this._selectedPalestrante;
  }
  public set selectedPalestrante(value: number) {
    this._selectedPalestrante = value;
  }

  public get evento(): Acontecimento {
    return this._evento;
  }
  public set evento(value: Acontecimento) {
    this._evento = value;
  }

  private configContent() {
    const contentContainer = document.getElementById('eventContent');
    if (contentContainer) contentContainer.innerHTML = this.evento.conteudo;
  }

  onChangePalestrante(data: any) {
    this.selectedPalestrante = data.currentPage;
  }

}
