import { Component, OnInit } from '@angular/core';
import { AconteceService } from './acontece.service';

@Component({
  selector: 'app-acontece',
  templateUrl: './acontece.component.html',
  styleUrls: ['./acontece.component.scss']
})
export class AconteceComponent implements OnInit {

  constructor(
    public aconteceService: AconteceService
  ) { }

  ngOnInit(): void {
    
  }
}
