import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  private _selectedService: any;

  constructor(
    private route: ActivatedRoute,
    public servicoService: ServicosService
  ) {
    this.route.url.subscribe((params) => {
        console.log(params[0].path)
        this.servicoService.getById(parseInt(params[0].path)).subscribe((service) => {
          this.selectedService = service;
        });
    });
  }

  ngOnInit(): void {
    
  }

  public get selectedService(): any {
    return this._selectedService;
  }
  public set selectedService(value: any) {
    this._selectedService = value;
  }
}
