import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export interface AppState {
  counter: number;
}

export const reducers = {
  counter : counterReducer,
  // tareas: counterTareas
};

/* export const reducers: ActionReducerMap<State> = {

}; */

