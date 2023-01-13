import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from '../services/guards/admin.service';
import { CartService } from '../services/guards/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

 productList:any;
IMAGES: any;

 constructor(private router:Router,private cartService:CartService){}
 banguluruconfirm1() {
  this.router.navigate(['banguluru-confirm-page'])
 }

 addProduct(item:any){
    this.cartService.addtoCarts(item);
 }
}
