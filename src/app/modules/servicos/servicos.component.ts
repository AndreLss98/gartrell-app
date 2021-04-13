import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from './servicos.service';
import { Servico } from 'src/app/models/servico.model';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  private _selectedService: Servico;

  constructor(
    private route: ActivatedRoute,
    public servicoService: ServicosService
  ) {
    
  }

  ngOnInit(): void {
    this.servicoService.servicos = this.route.snapshot.data.servicos;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.route.url.subscribe((params) => {
        this.servicoService.getById(parseInt(params[0].path)).subscribe((servico: any) => {
          this.selectedService = servico
        })
      });
    },)
  }

  public get selectedService(): Servico {
    return this._selectedService;
  }
  public set selectedService(value: Servico) {
    this._selectedService = value;
    setTimeout(() => {
      const content = document.getElementById('servicoSelectedContent');
      if (content) content.innerHTML = value.descricao;
    }, 200)
  }
}
