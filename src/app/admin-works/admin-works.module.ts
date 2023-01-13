import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetLoginDataComponent } from './get-login-data/get-login-data.component';
import { FormsModule } from '@angular/forms';
import { UserRegisterDetailsComponent } from './user-register-details/user-register-details.component';



@NgModule({
  declarations: [
    AddProductComponent,
    GetProductComponent,
    GetLoginDataComponent,
    UserRegisterDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[GetLoginDataComponent,AddProductComponent,GetProductComponent,UserRegisterDetailsComponent]
})
export class AdminWorksModule { }
