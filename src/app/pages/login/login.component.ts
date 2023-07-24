import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  DNI: string = '';
  NDNI: string= '';
  Clave: string = '';

  isLogin: boolean = true;
  isLoginPage: boolean = true;
  errorMessage: string = '';

  constructor(private router:Router,private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoginPage = this.router.url.includes('/login');
    console.log(this.isLoginPage)
  }

  login(): void {
    const bodyData = {
      "Tipo de Documento": this.DNI,
      "Número de Documento": this.NDNI,
      "Clave": this.Clave
    } 

    console.log(this.DNI);
    console.log(this.NDNI);
    console.log(this.Clave);

    this.http.post("http://localhost:3000/user/login",bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("incorrecto email o contraseña");
        console.log("Error al ingresar");
      }
    });

    this.http.get("http://localhost:3000/user/create").subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        this.router.navigateByUrl('/Dashboard');
      }
    });
  }
}



