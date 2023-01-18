import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './booking-work/home-page/home-page.component';


import { LoginFormComponent } from './user/login-form/login-form.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { BanguluruLocationComponent } from './booking-work/banguluru-location/banguluru-location.component';
import { BookingPageComponent } from './booking-work/booking-page/booking-page.component';
import { ChennaiLocationComponent } from './booking-work/chennai-location/chennai-location.component';
import { JammuLocationComponent } from './booking-work/jammu-location/jammu-location.component';
import { AddProductComponent } from './admin-works/add-product/add-product.component';
import { GetProductComponent } from './admin-works/get-product/get-product.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { GetLoginDataComponent } from './admin-works/get-login-data/get-login-data.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RoyapuramComponent } from './booking-work/Goa/royapuram.component';
import { HowItWorkComponent } from './booking-work/how-it-work/how-it-work.component';
import { UserBookedDetailsComponent } from './admin-works/user-booked-details/user-booked-details.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'booking-page',component:BookingPageComponent},
  {path:'login-form',component:LoginFormComponent,},
  {path:'register-form',component:RegisterFormComponent},
  {path:'chennai-location',component:ChennaiLocationComponent},

  {path:'banguluru-location',component:BanguluruLocationComponent},
  {path:'jammu-location',component:JammuLocationComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'get-product',component:GetProductComponent},
 {path:'get-login-data',component:GetLoginDataComponent},
  {path:'add-to-cart',component:AddToCartComponent},
  {path:'royapuram',component:RoyapuramComponent},
  {path:'how-it-work',component:HowItWorkComponent},
  {path:'add-new-data',component:AddNewDataComponent},
  {path:'user-booked-details',component:UserBookedDetailsComponent},
  {path:'user',loadChildren:()=> import('./user/user.module').then(m => m.UserModule) },
  {path:'admin-works',loadChildren:()=>import('./admin-works/admin-works.module').then(m=>m.AdminWorksModule)},
  {path:'booking-work',loadChildren:()=>import('./booking-work/booking-work.module').then(m=>m.BookingWorkModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
