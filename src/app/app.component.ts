import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService:AuthService,private router:Router){}
  title = 'projectnew';
  onLoginClick(){
    this.authService.login();
    this.router.navigate(['login-form'])
  }
  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(['home-page']);
    alert("you have been successfully logged out");
  }
  cart(){
    this.router.navigate(['add-to-cart']);
  }

  BOOKPAGE(){
    alert("🏨️ you need to login first if you are a existed user else please register to check room 🏨️")
  }
  Homepage(){
    alert("🏨️ you need to login first if you are a existed user else please register to check room 🏨️")
  }
  product(){
    console.log('product')
  }
}
