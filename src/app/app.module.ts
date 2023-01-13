import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/guards/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page/confirm-page.component';
import { GoaConfirmPageComponent } from './confirm-page/goa-confirm-page/goa-confirm-page.component';
import { ChennaiPage1Component } from './confirm-page/chennai-page1/chennai-page1.component';
import { GoaPage1Component } from './confirm-page/goa-page1/goa-page1.component';
import { BanguluruConfirmPageComponent } from './confirm-page/banguluru-confirm-page/banguluru-confirm-page.component';
import { BanguluruPage1Component } from './confirm-page/banguluru-page1/banguluru-page1.component';
import { JammuConfirmPageComponent } from './confirm-page/jammu-confirm-page/jammu-confirm-page.component';
import { JammuPage1Component } from './confirm-page/jammu-page1/jammu-page1.component';

import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminWorksModule } from './admin-works/admin-works.module';
import { BookingWorkModule } from './booking-work/booking-work.module';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    ConfirmPageComponent,
    GoaConfirmPageComponent,
    ChennaiPage1Component,
    GoaPage1Component,
    BanguluruConfirmPageComponent,
    BanguluruPage1Component,
    JammuConfirmPageComponent,
    JammuPage1Component,
    AddToCartComponent,
    ProductsComponent,
  
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

    UserModule,
    AdminWorksModule,
    BookingWorkModule
  ],

  providers: [AuthService ,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
