import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router,
     private cartService: CartService

 ) {  }

 totalitem: any;  

 ngOnInit() {
   this.cartService.getProducts().subscribe((res) => {
     this.totalitem=res ;
     console.log(res);
   });
   this.cartService.count()
 }
 

 hotel() {
   console.log('helppage');
   this.router.navigate(['booking-page']);
 }
 loggedin(){
 
   return localStorage.getItem('userData');
 }
 onlogout(){
   localStorage.removeItem('userData');
   localStorage.removeItem('adminData');
 }
 BookDetailsNew(){
   console.log('mainpage')
   this.router.navigate(['main-page'])
 }
 adminloggedin(){
   return localStorage.getItem('adminData');
 }
 onadminlogout(){
   localStorage.removeItem('adminData');
 }
}
