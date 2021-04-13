import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaOnlineService } from './consulta-online.service';

@Component({
  selector: 'app-terapia-online',
  templateUrl: './terapia-online.component.html',
  styleUrls: ['./terapia-online.component.scss']
})
export class TerapiaOnlineComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public consultaOnlineService: ConsultaOnlineService
  ) { }

  ngOnInit(): void {
    this.consultaOnlineService.membros = this.route.snapshot.data.equipe;
    
    /* this.profissionais = [
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      },
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      },
      {
        img: 'assets/home/equipe/eleny_vassao.jpg',
        nome: 'Nome Sobrenome Aqui',
        profissao: 'Psicólogia',
        bio: 'Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        horarioDisponivel: '08:00h às 18:00h'
      }
    ] */
  }
}
