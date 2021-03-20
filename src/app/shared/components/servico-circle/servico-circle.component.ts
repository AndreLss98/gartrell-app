import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-circle',
  templateUrl: './servico-circle.component.html',
  styleUrls: ['./servico-circle.component.scss']
})
export class ServicoCircleComponent implements OnInit {

  @Input() categoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
