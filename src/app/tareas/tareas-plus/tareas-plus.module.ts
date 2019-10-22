import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';



@NgModule({
  declarations: [ListaTareasComponent],
  imports: [
    CommonModule
  ],
  exports: [ListaTareasComponent]
})
export class TareasPlusModule { }
