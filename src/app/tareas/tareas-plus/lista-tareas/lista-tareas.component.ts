import { Component, OnInit } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';
import { LocalStoreService } from 'src/app/services/local-store.service';

@Component({
  selector: 'alt-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  storeKey: string;
  aTareas: Array<TareasModel>;
  constructor(public localStoreService: LocalStoreService) { }

  ngOnInit() {
    this.storeKey = 'Tareas';
    this.aTareas = this.localStoreService.getItem(this.storeKey)
  }

  onAddTarea(tarea) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);
    this.actualizarStore();
  }

  onDeleteTarea(i) {
    this.aTareas.splice(i,1);
    this.actualizarStore()
  }

  onCheckTarea(i) {
    this.aTareas[i].isCompleted = !this.aTareas[i].isCompleted;
    this.actualizarStore();
  }

  actualizarStore() {
    this.localStoreService.setItem(this.storeKey, this.aTareas)
  }
}
