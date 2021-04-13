import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquipeService } from 'src/app/modules/institucional/equipe/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    public equipeService: EquipeService
  ) {

  }

  ngOnInit(): void {
    this.equipeService.membros = this.route.snapshot.data.membros;
  }
}
