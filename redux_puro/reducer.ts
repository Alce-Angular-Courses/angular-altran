import { Reducer, Action } from './interfaces';

export const reducer: Reducer<number> = (oldStado: number, action: Action) => {
  switch (action.type) {
    case 'Increment':
      return oldStado + 1;
    case 'Decrement':
      return oldStado - 1;
    case 'Plus10':
      return oldStado + action.payload;
    default:
     return oldStado;
  }
};



