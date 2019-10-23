import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {
  newTarea: TareasModel;
  @Output() addTarea: EventEmitter<TareasModel>;
  constructor() {
    this.addTarea = new EventEmitter();
  }

  ngOnInit() {
    this.newTarea = new TareasModel();
  }

  onClickAdd(ev) {
    this.addTarea.next(this.newTarea);
    this.newTarea = new TareasModel();
  }
}
