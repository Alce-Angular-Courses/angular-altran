import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Altran';
  }

}
