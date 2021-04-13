import { Component, OnInit } from '@angular/core';

import { LinksUteisService } from 'src/app/modules/institucional/links-uteis/links-uteis.service';
import { LinkUtil } from '../../models/links-uteis.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private _firstsLinks: LinkUtil[] = [];

  constructor(
    public linksUteisService: LinksUteisService
  ) { }

  ngOnInit(): void {
    this.firstsLinks = this.linksUteisService.linksUteis.slice(0, 4);
  }

  public get firstsLinks(): LinkUtil[] {
    return this._firstsLinks;
  }
  public set firstsLinks(value: LinkUtil[]) {
    this._firstsLinks = value;
  }

  backToTop(): string {
    return `${window.location.pathname}#navbar`;
  }

}
