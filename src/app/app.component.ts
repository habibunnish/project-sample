import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/guards/auth.service';
// import { Observable } from 'rxjs';
// import { AuthService} from './services/guards/AuthsService';
import { CartService } from './services/guards/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
     private router: Router,
      private cartService: CartService,
      private authservice:AuthService,

  ) {  }
  showme: boolean = false;
  totalitem: any;  

  ngOnInit() {
    this.cartService.getProducts().subscribe((res) => {
      this.totalitem=res ;
      console.log(res);
    });
    this.cartService.count()
  }
  adminpage() {
    this.showme = !this.showme;
  }
 

  cart() {
    this.router.navigate(['add-to-cart']);
  }
   Homepage() {
    // alert(`🏨️ you need to login first if you are a existed user 
    // else please register to check room 🏨️`);
   
    
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
  }
  BookDetailsNew(){
    console.log('mainpage')
    this.router.navigate(['main-page'])
  }
}
