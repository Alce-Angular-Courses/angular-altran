import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { NewTareaComponent } from './new-tarea/new-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [ListaTareasComponent, NewTareaComponent, TareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule
  ],
  exports: [ListaTareasComponent]
})
export class TareasPlusModule { }
