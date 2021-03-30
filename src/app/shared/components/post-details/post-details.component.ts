import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  public post: any;

  constructor() { }

  ngOnInit(): void {

  }

}
