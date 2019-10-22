import { Component, OnInit } from '@angular/core';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'alt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
  }

}
