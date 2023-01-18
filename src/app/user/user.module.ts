import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';
import { AuthService } from '../services/guards/auth.service';


@NgModule({
  declarations: [
   LoginFormComponent,
   RegisterFormComponent
  ],


  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
  ],
  exports:[LoginFormComponent,RegisterFormComponent],
  providers: [AuthService ,AuthGuardService],
})
export class UserModule { }
