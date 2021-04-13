import { Component, OnInit } from '@angular/core';

import { EquipeService } from 'src/app/modules/institucional/equipe/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  
  constructor(
    public equipeService: EquipeService
  ) {

  }

  ngOnInit(): void {
  
  }
}
