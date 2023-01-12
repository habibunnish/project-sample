import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/guards/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './component1/home-page/home-page.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';
import { LoginFormComponent } from './component1/login-form/login-form.component';

import { BookingPageComponent } from './component2/booking-page/booking-page.component';
import { ChennaiLocationComponent } from './component2/chennai-location/chennai-location.component';
import { GoaLocationComponent } from './component2/goa-location/goa-location.component';
import { BanguluruLocationComponent } from './component2/banguluru-location/banguluru-location.component';
import { JammuLocationComponent } from './component2/jammu-location/jammu-location.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page/confirm-page.component';
import { GoaConfirmPageComponent } from './confirm-page/goa-confirm-page/goa-confirm-page.component';
import { AddProductComponent } from './component3/add-product/add-product.component';
import { GetProductComponent } from './component3/get-product/get-product.component';
import { ChennaiPage1Component } from './confirm-page/chennai-page1/chennai-page1.component';
import { GoaPage1Component } from './confirm-page/goa-page1/goa-page1.component';
import { BanguluruConfirmPageComponent } from './confirm-page/banguluru-confirm-page/banguluru-confirm-page.component';
import { BanguluruPage1Component } from './confirm-page/banguluru-page1/banguluru-page1.component';
import { JammuConfirmPageComponent } from './confirm-page/jammu-confirm-page/jammu-confirm-page.component';
import { JammuPage1Component } from './confirm-page/jammu-page1/jammu-page1.component';
import { GetLoginDataComponent } from './component1/get-login-data/get-login-data.component';
import { UserRegisterDetailsComponent } from './component3/user-register-details/user-register-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    BookingPageComponent,
    ChennaiLocationComponent,
    GoaLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    ConfirmPageComponent,

    GoaConfirmPageComponent,
    AddProductComponent,
    GetProductComponent,
    ChennaiPage1Component,
    GoaPage1Component,
    BanguluruConfirmPageComponent,
    BanguluruPage1Component,
    JammuConfirmPageComponent,
    JammuPage1Component,
    GetLoginDataComponent,
    UserRegisterDetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,


  
   
  ],

  providers: [AuthService ,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
