import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/guards/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 
  // logedIn(){
  //   return localStorage.getItem('adminData');
  // }
  // logout(){
  //   return localStorage.removeItem('adminData');
  // }
  adminloggedin(){
    return localStorage.getItem('adminData');
  }
  
}
