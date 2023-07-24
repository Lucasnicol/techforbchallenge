import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderrComponent } from './headerr/headerr.component';
import { PersonComponent } from './assents/person/person.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TarjetaServiceComponent } from './tarjeta-service/tarjeta-service.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';





import { OverlayModule} from '@angular/cdk/overlay'
import { CdkMenuModule} from '@angular/cdk/menu';
import { RegisterComponent } from './pages/register/register.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    AppComponent,
    TarjetaServiceComponent,
    MobileViewComponent,
    DesktopViewComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HeaderrComponent,
    PersonComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
