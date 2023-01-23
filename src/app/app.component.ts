import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './services/guards/AuthsService';
import { CartService } from './services/guards/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  logouts:any;
  isLoggedInside$!: Observable<boolean>; 
  
  constructor(
    private authsService: AuthService,
    private router: Router,
    private cartService: CartService,

  ) {  }
 
   
  showme: boolean = false;
  totalitem: number = 0;  

  ngOnInit() {
    this.cartService.getProducts().subscribe((res) => {
      this.totalitem = res.length;
      console.log(res);
    });

    this.isLoggedInside$=this.authsService.isUserloggedIn
  
    this.logoutClick();
  }
  adminpage() {
    this.showme = !this.showme;
  }
 
  logoutClick() {
    this.authsService.logout();
    this.router.navigate(['login-form']);
  }
  cart() {
    this.router.navigate(['add-to-cart']);
  }
   Homepage() {
    alert(`🏨️ you need to login first if you are a existed user 
    else please register to check room 🏨️`);
    this.router.navigate(['login-form']);
  }
  helppage() {
    console.log('helppage');
    this.router.navigate(['how-it-work']);
  }
}
