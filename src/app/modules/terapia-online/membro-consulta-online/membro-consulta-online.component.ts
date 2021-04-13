import { Component, Input, OnInit } from '@angular/core';
import { Membro } from 'src/app/shared/models/membro.model';

@Component({
  selector: 'app-membro-consulta-online',
  templateUrl: './membro-consulta-online.component.html',
  styleUrls: ['./membro-consulta-online.component.scss']
})
export class MembroConsultaOnlineComponent implements OnInit {

  @Input()
  public membro: Membro;

  constructor() { }

  ngOnInit(): void {
    
  }

}
