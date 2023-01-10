import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './component1/home-page/home-page.component';
import { RegisterFormComponent } from './component1/register-form/register-form.component';
import { LoginFormComponent } from './component1/login-form/login-form.component';
import { HttpClientComponent } from './component1/http-client/http-client.component';
import { BookingPageComponent } from './component2/booking-page/booking-page.component';
import { ChennaiLocationComponent } from './component2/chennai-location/chennai-location.component';
import { GoaLocationComponent } from './component2/goa-location/goa-location.component';
import { BanguluruLocationComponent } from './component2/banguluru-location/banguluru-location.component';
import { JammuLocationComponent } from './component2/jammu-location/jammu-location.component';
import { ConfirmPageComponent } from './component2/confirm-page/confirm-page.component';
import { GoaConfirmPageComponent } from './component2/goa-confirm-page/goa-confirm-page.component';
import { AddProductComponent } from './component3/add-product/add-product.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HttpClientComponent,
    BookingPageComponent,
    ChennaiLocationComponent,
    GoaLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    ConfirmPageComponent,

    GoaConfirmPageComponent,
    AddProductComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,


  
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
