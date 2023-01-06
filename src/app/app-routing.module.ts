import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component1/home-page/home-page.component';
import { HttpClientComponent } from './component1/http-client/http-client.component';
import { LoginFormComponent } from './component1/login-form/login-form.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';
import { BookingPageComponent } from './component2/booking-page/booking-page.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'booking-page',component:BookingPageComponent},
  {path:'login-form',component:LoginFormComponent},
  {path:'register-form',component:RegisterFormComponent},
  {path:'http-client',component:HttpClientComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
