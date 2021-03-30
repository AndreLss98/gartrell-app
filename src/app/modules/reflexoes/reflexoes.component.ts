import { Component, OnInit } from '@angular/core';
import { ReflexoesService } from './reflexoes.service';

@Component({
  selector: 'app-reflexoes',
  templateUrl: './reflexoes.component.html',
  styleUrls: ['./reflexoes.component.scss']
})
export class ReflexoesComponent implements OnInit {

  public callFunction: any;

  constructor(
    public reflexoesService: ReflexoesService
  ) { }

  ngOnInit(): void {

  }

  public createFunction(reflection: any) {
     return () => {
      this.reflexoesService.selectedReflection = reflection;
      setTimeout(() => {
        window.location.href = `${window.location.pathname}#PostDetail`;
      }, 200)
    }
  }
}
