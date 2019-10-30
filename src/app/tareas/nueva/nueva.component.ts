import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { addTareaAction } from 'src/app/reducers/tareas.actions';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  nuevaTarea: FormControl;
  tarea: TareasModel;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.nuevaTarea = new FormControl()

  }

  onClick() {
    this.nuevaTarea.valueChanges.subscribe(data => {
        this.tarea = {nombre: data, isCompleted: false};
        console.log(this.tarea)
        const action =  addTareaAction({payload: this.tarea});
        this.store.dispatch(action)
    });
  }

}
