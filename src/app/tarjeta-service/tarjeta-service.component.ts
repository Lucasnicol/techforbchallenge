import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tarjeta-service',
  templateUrl: './tarjeta-service.component.html',
  styleUrls: ['./tarjeta-service.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class TarjetaServiceComponent {
  montoIngresado: number | undefined;
  monto: number = 0;
  
  constructor(
    public dialogRef: MatDialogRef<TarjetaServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.montoIngresado = data;
  }


  guardarValor(): void {
    if (this.montoIngresado !== undefined) {
      this.monto += this.montoIngresado
      this.dialogRef.close(this.montoIngresado);
    }
  }
}
