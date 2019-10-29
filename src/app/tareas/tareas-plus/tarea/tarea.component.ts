import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css', '../lista-tareas/lista-tareas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TareaComponent implements OnInit {

  @Input() tarea: TareasModel;
  @Input() index: number;
  @Output() delete: EventEmitter<number>;
  @Output() check: EventEmitter<number>

  constructor() {
      this.delete = new EventEmitter();
      this.check = new EventEmitter();
  }

  ngOnInit() {
    this.tarea = {...this.tarea};
    console.log(this.tarea)
  }

  onDelete() {
    this.delete.next(this.index);
  }

  onChange() {
    this.check.next(this.index);
  }
}
