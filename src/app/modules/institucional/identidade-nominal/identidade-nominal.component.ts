import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-identidade-nominal',
  templateUrl: './identidade-nominal.component.html',
  styleUrls: ['./identidade-nominal.component.scss']
})
export class IdentidadeNominalComponent implements OnInit {

  private _content: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.content = this.route.snapshot.data.content;
  }

  public get content(): any {
    return this._content;
  }
  public set content(value: any) {
    this._content = value;
  }

  initContent() {
    const content = document.getElementById('identidadeNominalContent');
    if (content) content.innerHTML = this.content.conteudo;
  }

}
