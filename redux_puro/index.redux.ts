import { Action, Reducer, Store, createStore} from 'redux'

interface ActionPlus extends Action {
  payload: number;
}

export const INCREMENT: Action = {type: 'Increment'};
export const DECREMENT: Action = {type: 'Decrement'};
export const PLUS10: ActionPlus = {type: 'Plus10', payload: 10};

const reducer: Reducer<number> = (oldStado: number, action: Action | ActionPlus) => {
  switch (action.type) {
    case 'Increment':
      return oldStado + 1;
    case 'Decrement':
      return oldStado - 1;
    case 'Plus10':
      return oldStado + (action as ActionPlus).payload ;
    default:
     return oldStado;
  }
};

// store: Observable<void>

const store: Store = createStore<number, null, null, null>(reducer, 0);
console.log('Estado inicial', store.getState())
store.subscribe( (x) => console.log(store.getState()));
store.dispatch(INCREMENT);
store.dispatch(DECREMENT);
store.dispatch(PLUS10);
