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

  constructor() {
      this.delete = new EventEmitter();
  }

  ngOnInit() {
  }

  onDelete() {
    this.delete.next(this.index);
  }

}
