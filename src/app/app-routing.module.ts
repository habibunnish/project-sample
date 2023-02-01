import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { GetProductComponent } from './admin-works/get-product/get-product.component';
import { GetLoginDataComponent } from './admin-works/get-login-data/get-login-data.component';
import { AddToCartComponent } from './admin-works/add-to-cart/add-to-cart.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { UserBookedDetailsComponent } from './admin-works/user-booked-details/user-booked-details.component';
import { AddNewDataComponent } from './admin-works/add-new-data/add-new-data.component';



const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'get-product', component: GetProductComponent },
  { path: 'get-login-data', component: GetLoginDataComponent },
  { path: 'add-to-cart', component: AddToCartComponent },
 
  { path: 'how-it-work', component: HowItWorkComponent },
  { path: 'add-new-data/:id', component: AddNewDataComponent },
  { path: 'user-booked-details', component: UserBookedDetailsComponent },
  {
    path: 'book-details-new',
    loadChildren: () =>
      import('./book-details-new/book-details-new.module').then(
        (m) => m.BookDetailsNewModule
      ),
  },
  {path:'users',loadChildren:()=> import('./users/users.module').then(
    (m)=>m.UsersModule
  )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
