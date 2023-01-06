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




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HttpClientComponent,
    BookingPageComponent,
 
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
