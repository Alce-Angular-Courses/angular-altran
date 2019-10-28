import { Store } from './store';
import { reducer } from './reducer';
import { INCREMENT, DECREMENT, PLUS10 } from './actions';

const appStore = new Store(reducer, 0);
console.log('Estsdo inicial', appStore.getState());
appStore.dispatch(INCREMENT);
console.log('Estado despues de incremento', appStore.getState());
appStore.dispatch(DECREMENT);
console.log('Estado despues de decremento', appStore.getState());
appStore.dispatch(PLUS10);
console.log('Estado despues de Plus10', appStore.getState());

