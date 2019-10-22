export interface TareasInterface {
  nombre: string;
  isCompleted: boolean;
}

export class TareasModel implements TareasInterface {
  /* nombre: string;
  isCompleted: boolean;

  constructor (nombre: string, isCompleted: boolean) {
    this.nombre = nombre;
    this.isCompleted = isCompleted;
  } */

  constructor (
    public nombre: string,
    public isCompleted: boolean) {

    }
}
