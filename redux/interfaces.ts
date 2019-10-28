// Prueba

export interface Action {
  type: string;
  payload?: any;
}

// Tipo generico

export interface Reducer<T> {
  // tslint:disable-next-line: callable-types
  (oldState: T, action: Action ): T;
}
