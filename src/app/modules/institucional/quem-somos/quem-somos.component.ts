import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent implements OnInit {

  private _content: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.content = this.route.snapshot.data.content;
  }

  ngAfterViewInit() {
    this.initContent();
  }

  public get content(): any {
    return this._content;
  }
  public set content(value: any) {
    this._content = value;
  }

  initContent() {
    const content = document.getElementById("quemSomosContainer");
    if (content) content.innerHTML = this.content.conteudo;
    
    const visaoContent = document.getElementById("quemSomosVisao");
    if (visaoContent) visaoContent.innerHTML = this.content.texto_visao;
    
    const missaoContent = document.getElementById("quemSomosMissao");
    if (missaoContent) missaoContent.innerHTML = this.content.texto_missao;
    
    const valoresContent = document.getElementById("quemSomosValores");
    if (valoresContent) valoresContent.innerHTML = this.content.texto_valores;
  }
}
