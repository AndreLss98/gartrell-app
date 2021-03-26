import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss']
})
export class GaleriaFotosComponent implements OnInit {

  cards = ["assets/home/banner.jpg", "assets/home/banner.jpg", 
           "assets/home/banner.jpg", "assets/home/banner.jpg", 
           "assets/home/banner.jpg","assets/home/banner.jpg"];

  constructor() { }

  ngOnInit(): void {
  }


}
