import { ADD_TAREA } from './tareas.actions';

export const tareasReducer = (
  oldState = [], action: any) => {
  if (action === null) {
    return oldState;
  }
  switch (action.type ) {
    case ADD_TAREA:
    // TODO
  default:
    return oldState;
    }
  };
