import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminWorksModule } from './admin-works/admin-works.module';
import { BookingWorkModule } from './booking-work/booking-work.module';

import { AuthsGuardsService } from './services/guards/auths-guards.service';
import { AuthService } from './services/guards/AuthsService';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
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

  providers: [AuthsGuardsService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
