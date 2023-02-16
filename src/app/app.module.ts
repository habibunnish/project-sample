import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AuthService } from './services/guards/auth.service';

import { BookDetailsNewModule } from './book-details-new/book-details-new.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminModule,
    BookDetailsNewModule,
    UsersModule,
  ],

  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
