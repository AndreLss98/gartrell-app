import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-img-container',
  templateUrl: './side-img-container.component.html',
  styleUrls: ['./side-img-container.component.scss']
})
export class SideImgContainerComponent implements OnInit {

  @Input()
  public imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
