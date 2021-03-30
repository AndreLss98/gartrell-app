import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { ReflexoesService } from '../reflexoes/reflexoes.service';
import { ServicosService } from '../servicos/servicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _equipe: any[] = [];
  private _eventos: any[] = [];
  private _noticias: any[] = [];

  private _selectedMember: number = 0;

  constructor(
    public equipeService: EquipeService,
    public servicosService: ServicosService,
    public reflexoesService: ReflexoesService
  ) { }

  ngOnInit(): void {

    this.equipe = this.equipeService.equipeInterna.filter(membro => membro.img);

    this.eventos = [
      { dia: 18, mes: 'Novemnbro', titulo: 'IV Jornada de Saúde Mental', descricao: 'Pandemia Global e Fé Crisã', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 25, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 27, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' },
      { dia: 31, mes: 'Dezembro', titulo: 'Nome do Evento aqui!', descricao: 'Descrição do evento aqui.', banner: 'assets/home/evento/evento_banner.jpg' }
    ]

    this.noticias = [
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' },
      { img: 'assets/home/noticias/image_placeholder.jpg', titulo: 'Lorem Ipsum Dolor', subTitulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.' }
    ]
  }

  public get equipe(): any[] {
    return this._equipe;
  }

  public set equipe(value: any[]) {
    this._equipe = value;
  }

  public get eventos(): any[] {
    return this._eventos;
  }
  
  public set eventos(value: any[]) {
    this._eventos = value;
  }

  public get noticias(): any[] {
    return this._noticias;
  }

  public set noticias(value: any[]) {
    this._noticias = value;
  }

  public get selectedMember(): number {
    return this._selectedMember;
  }

  public set selectedMember(value: number) {
    this._selectedMember = value;
  }

  public nextMember() {
    if (this.selectedMember < this.equipe.length) ++this.selectedMember;
  }

  public previousMember() {
    if (this.selectedMember > 0) --this.selectedMember;
  }
}
