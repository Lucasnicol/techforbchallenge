import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private monto: number;

  constructor() {
    this.monto = 800000;
  }

  obtenerMonto(): number {
    return this.monto;
  }

  guardarMonto(nuevoMonto: number): void {
    this.monto = nuevoMonto;
  }
}
