import { Reducer, Action } from 'interfaces';

export class Store<T> {
  private state: T;

 constructor(
      private reducer: Reducer<T>,
      private initialState: T) {
      this.state = initialState;
  }

  getState(): T {
      return this.state;
  }

  dispatch(action: Action): void {
      this.state = this.reducer(this.state, action);
  }
}







