import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
})
export class LocalStoreService {
  store$: Observable<any>;
  constructor() {}

  getItem(key) {
    const aDatos = JSON.parse(localStorage.getItem(key)) || []
    this.store$ = aDatos;
    return aDatos;
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeItem(key) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear();
  }
}
