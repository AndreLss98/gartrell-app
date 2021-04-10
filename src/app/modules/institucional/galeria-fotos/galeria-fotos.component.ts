import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss']
})
export class GaleriaFotosComponent implements OnInit {

  cards = [
    { thumbnail: "assets/institucional/galeria_fotos/gp_de_capacitacao.jpeg", nome: "Capacitação - Infância e Adolescência" },
    { thumbnail: "assets/institucional/galeria_fotos/espaco_instituto_gartrell.jpeg", nome: "Espaço Instituto Gartrell" },
    { thumbnail: "assets/institucional/galeria_fotos/gp_de_crescimento_ansiedade.jpeg", nome: "Grupo Crescimento - Ansiedade e Depressão" },
    { thumbnail: "assets/institucional/galeria_fotos/i_jornada_saude_mental.jpeg", nome: "I Jornada de Saúde Mental" },
    { thumbnail: "assets/institucional/galeria_fotos/ii_jornada_de_saude_mental.jpeg", nome: "II Jornada de Saúde Mental" },
    { thumbnail: "assets/institucional/galeria_fotos/imprensa_radio_e_tv.jpeg", nome: "Imprensa, Rádio e TV" }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
