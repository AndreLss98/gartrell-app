import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private _evento: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.evento = this.route.snapshot.data.evento;
  }

  public get evento(): any {
    return this._evento;
  }

  public set evento(value: any) {
    this._evento = value;
  }
}
