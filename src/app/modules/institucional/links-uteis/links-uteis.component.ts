import { Component, OnInit } from '@angular/core';
import { LinksUteisService } from './links-uteis.service';

@Component({
  selector: 'app-links-uteis',
  templateUrl: './links-uteis.component.html',
  styleUrls: ['./links-uteis.component.scss']
})
export class LinksUteisComponent implements OnInit {

  constructor(
    public linksUteis: LinksUteisService
  ) { }

  ngOnInit(): void {

  }

}
