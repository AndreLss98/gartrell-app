import { Component, Input, OnInit } from '@angular/core';

import { Acontecimento } from './../../../models/acontece.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @Input()
  public evento: Acontecimento;

  @Input()
  public inverse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
