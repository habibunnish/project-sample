import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetLoginDataComponent } from './get-login-data/get-login-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserBookedDetailsComponent } from './user-booked-details/user-booked-details.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AddProductComponent,
    GetProductComponent,
    GetLoginDataComponent,
    UserBookedDetailsComponent,
    AddNewDataComponent,
    AddToCartComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    GetLoginDataComponent,
    AddProductComponent,
    GetProductComponent,
    UserBookedDetailsComponent,
    AddNewDataComponent,
    AddToCartComponent,
  ],
})
export class AdminWorksModule {}
