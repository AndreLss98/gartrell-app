import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  public length: number = 1;

  @Output()
  public changePage = new EventEmitter();

  private _selected: number = 1;
  private _pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pages = Array.from({ length: this.length }, (_, i) => i+1);
  }

  public get selected(): number {
    return this._selected;
  }
  public set selected(value: number) {
    this._selected = value;
  }

  public get pages(): number[] {
    return this._pages;
  }
  public set pages(value: number[]) {
    this._pages = value;
  }

  public selectPage(currentPage: number) {
    this.selected = currentPage;
    this.changePage.emit({ currentPage });
  }

  public goNext() {
    if(this.selected < this.length) this.selected++;
    this.changePage.emit({ currentPage: this.selected });
  }

  public goPrevious() {
    if (this.selected > 1) this.selected--;
    this.changePage.emit({ currentPage: this.selected });
  }
}
