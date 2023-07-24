import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: DashboardComponent },
  { path: 'loans', component: DashboardComponent },
  { path: 'operations', component: DashboardComponent },
  { path: 'offers', component: DashboardComponent },
  { path: 'security', component: DashboardComponent },
  { path: 'points', component: DashboardComponent },
  { path: 'help', component: DashboardComponent },
  { path: 'logOut', component: DashboardComponent },
  { path: 'mobile', component: MobileViewComponent },
  { path: 'desktop', component: DesktopViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
