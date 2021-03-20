import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @Input()
  public evento: any;

  @Input()
  public inverse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
