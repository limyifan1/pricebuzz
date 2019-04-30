import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MyalertsComponent } from './myalerts/myalerts.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'currencies', component:CurrenciesComponent},
  {path:'myalerts', component:MyalertsComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
