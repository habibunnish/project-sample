import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/guards/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminWorksModule } from './admin-works/admin-works.module';
import { BookingWorkModule } from './booking-work/booking-work.module';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';



@NgModule({
  declarations: [
    AppComponent,
     AddToCartComponent,
     AddNewDataComponent,
  
  
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
    BookingWorkModule,

  ],

  providers: [AuthService ,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
