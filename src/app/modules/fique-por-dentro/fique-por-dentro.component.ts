import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.scss']
})
export class FiquePorDentroComponent implements OnInit {

  title: string ='';

  constructor(private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.params.item;
    if(route === 'saude-integral'){
      this.title = "Saúde Integral"
    }else if(route === 'desenvolvimento-humano'){
      this.title = "Desenvolvimento Humano"
    }else{
      this.title = "Sociedade"
    }
  }

}
