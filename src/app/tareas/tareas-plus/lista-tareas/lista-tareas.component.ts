import { Component, OnInit } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  aTareas: Array<TareasModel>;
  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  onAddTarea(tarea) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);

  }

  onDeleteTarea(i) {
    this.aTareas.splice(i,1);
  }

}
