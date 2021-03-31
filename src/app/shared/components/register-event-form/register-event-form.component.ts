import { Component, Injectable, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-register-event-form',
  templateUrl: './register-event-form.component.html',
  styleUrls: ['./register-event-form.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class RegisterEventFormComponent implements OnInit {

  private _model: NgbDateStruct;
  private _ageArray = new Array(100);
  private _sexualitys: string[] = [
    'Masculino',
    'Feminino'
  ];

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {
  
  }

  ngOnInit(): void {

  }

  public get model(): NgbDateStruct {
    return this._model;
  }

  public set model(value: NgbDateStruct) {
    this._model = value;
  }

  public get ageArray() {
    return this._ageArray;
  }

  public set ageArray(value) {
    this._ageArray = value;
  }

  public get sexualitys(): string[] {
    return this._sexualitys;
  }

  public set sexualitys(value: string[]) {
    this._sexualitys = value;
  }
}
