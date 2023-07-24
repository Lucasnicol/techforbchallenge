import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  DNI: string = '';
  NDNI: string = '';
  Clave: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  save(): void {
    let bodyData = {
      "Tipo de Documento": this.DNI,
      "Número de Documento": this.NDNI,
      "Clave": this.Clave
    };

    this.register();
  }

  register(): void {
    console.log("holaaa");
    let bodyData = {
      "Tipo de Documento": this.DNI,
      "Número de Documento": this.NDNI,
      "Clave": this.Clave
    };

    this.http.post("http://localhost:3000/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Usuario registrado correctamente");
      this.router.navigate(['/login']);
    });
  }
}

