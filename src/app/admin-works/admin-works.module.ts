import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetLoginDataComponent } from './get-login-data/get-login-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterDetailsComponent } from './user-register-details/user-register-details.component';
import { UserBookedDetailsComponent } from './user-booked-details/user-booked-details.component';



@NgModule({
  declarations: [
    AddProductComponent,
    GetProductComponent,
    GetLoginDataComponent,
    UserRegisterDetailsComponent,
    UserBookedDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   

  ],
  exports:[GetLoginDataComponent,AddProductComponent,GetProductComponent,UserRegisterDetailsComponent,UserBookedDetailsComponent]
})
export class AdminWorksModule { }
