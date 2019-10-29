import { Action } from '@ngrx/store';

export interface PlusAction extends Action {
  payload: number;
}

// Definimos como constantes los valores de los type de las acciones
export const INCREMENT = '[Counter] increment 1';
export const DECREMENT = '[Counter] decrement 1';
export const PLUS = '[Counter] plus 20';
export const RESET = '[Counter] reset';

export class IncrementAction implements Action  {
  type = INCREMENT;
}

export class DecrementAction implements Action  {
  type = DECREMENT;
}

export class PlusAction implements PlusAction  {
  type = PLUS;
  constructor(public payload: number) {
  }
}

export type AllActions  = IncrementAction | DecrementAction | PlusAction;


