import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component1/home-page/home-page.component';


import { LoginFormComponent } from './component1/login-form/login-form.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';
import { BanguluruLocationComponent } from './component2/banguluru-location/banguluru-location.component';
import { BookingPageComponent } from './component2/booking-page/booking-page.component';
import { ChennaiLocationComponent } from './component2/chennai-location/chennai-location.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page/confirm-page.component';
import { GoaConfirmPageComponent } from './confirm-page/goa-confirm-page/goa-confirm-page.component';
import { GoaLocationComponent } from './component2/goa-location/goa-location.component';
import { JammuLocationComponent } from './component2/jammu-location/jammu-location.component';
import { AddProductComponent } from './component3/add-product/add-product.component';
import { GetProductComponent } from './component3/get-product/get-product.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { ChennaiPage1Component } from './confirm-page/chennai-page1/chennai-page1.component';
import { GoaPage1Component } from './confirm-page/goa-page1/goa-page1.component';
import { BanguluruConfirmPageComponent } from './confirm-page/banguluru-confirm-page/banguluru-confirm-page.component';
import { BanguluruPage1Component } from './confirm-page/banguluru-page1/banguluru-page1.component';
import { GetLoginDataComponent } from './component1/get-login-data/get-login-data.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'booking-page',component:BookingPageComponent,canActivate:[AuthGuardService]},
  {path:'login-form',component:LoginFormComponent},
  {path:'register-form',component:RegisterFormComponent},
  {path:'chennai-location',component:ChennaiLocationComponent},
  {path:'goa-location',component:GoaLocationComponent},
  {path:'banguluru-location',component:BanguluruLocationComponent},
  {path:'jammu-location',component:JammuLocationComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'get-product',component:GetProductComponent},
  {path:'confirm-page',component:ConfirmPageComponent},
  {path:'chennai-page1',component:ChennaiPage1Component},
  {path:'goa-confirm-page',component:GoaConfirmPageComponent},
  {path:'goa-page1',component:GoaPage1Component},
  {path:'banguluru-confirm-page',component:BanguluruConfirmPageComponent},
  {path:'banguluru-page1',component:BanguluruPage1Component},
  {path:'get-login-data',component:GetLoginDataComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
