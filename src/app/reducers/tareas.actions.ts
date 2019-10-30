import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { TareasModel } from '../models/tareas.model';


/* export interface TareaAction extends Action {
  payload: TareasModel;
} */

// Definimos como constantes los valores de los type de las acciones
export const ADD_TAREA = '[Tareas] agregar tarea';


/* export class AddTareaAction implements TareaAction  {
  type = ADD_TAREA;
  constructor(public payload: TareasModel) {
  }
} */

export const addTareaAction = createAction(
  ADD_TAREA,
  props<{ payload: TareasModel }>()
);

