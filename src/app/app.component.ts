
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/guards/auth.service';
import { CartService } from './services/guards/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router,private cartService:CartService){}
  title = 'projectnew';
  showme:boolean=false;
  public totalitem:number=0;

  ngOnInit(){
    this.cartService.getProducts().subscribe(res=>{
      this.totalitem=res.length
      console.log(res)
    })
  }
  adminpage(){
    this.showme=!this.showme;
  }
  
  //login
  Click(){
    this.authService.login();
    this.router.navigate(['login-form'])
  }
  //logout
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['home-page']);
    alert("you sure want to  log out");
  }
  cart(){
    this.router.navigate(['add-to-cart']);
  }
  Homepage(){
    alert(`🏨️ you need to login first if you are a existed user 
    else please register to check room 🏨️`)
  }
  helppage(){
    console.log("helppage");
    this.router.navigate(['how-it-work']);
  }
 
 
}
