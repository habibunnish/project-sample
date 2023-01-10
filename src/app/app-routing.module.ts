import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component1/home-page/home-page.component';
import { HttpClientComponent } from './component1/http-client/http-client.component';
import { LoginFormComponent } from './component1/login-form/login-form.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';
import { BanguluruLocationComponent } from './component2/banguluru-location/banguluru-location.component';
import { BookingPageComponent } from './component2/booking-page/booking-page.component';
import { ChennaiLocationComponent } from './component2/chennai-location/chennai-location.component';
import { ConfirmPageComponent } from './component2/confirm-page/confirm-page.component';
import { GoaConfirmPageComponent } from './component2/goa-confirm-page/goa-confirm-page.component';
import { GoaLocationComponent } from './component2/goa-location/goa-location.component';
import { JammuLocationComponent } from './component2/jammu-location/jammu-location.component';
import { AddProductComponent } from './component3/add-product/add-product.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'booking-page',component:BookingPageComponent},
  {path:'login-form',component:LoginFormComponent},
  {path:'register-form',component:RegisterFormComponent},
  {path:'http-client',component:HttpClientComponent},
  {path:'chennai-location',component:ChennaiLocationComponent},
  {path:'goa-location',component:GoaLocationComponent},
  {path:'banguluru-location',component:BanguluruLocationComponent},
  {path:'jammu-location',component:JammuLocationComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'confirm-page',component:ConfirmPageComponent},
  {path:'goa-confirm-page',component:GoaConfirmPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
