import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'alt-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {
  @Input() autor: string;
  
  constructor() { }

  ngOnInit() {
  }

}
