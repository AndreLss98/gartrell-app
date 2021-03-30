import { Component, OnInit } from '@angular/core';
import { ReflexoesService } from './reflexoes.service';

@Component({
  selector: 'app-reflexoes',
  templateUrl: './reflexoes.component.html',
  styleUrls: ['./reflexoes.component.scss']
})
export class ReflexoesComponent implements OnInit {

  constructor(
    public reflexoesService: ReflexoesService
  ) { }

  ngOnInit(): void {

  }
}
