import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authservice:AuthService,private router:Router){}
 
 canActivate() {
 
   const users=localStorage.getItem("userData");
   const admins=localStorage.getItem("adminData");
   if(users!=null ){
    alert("already loged in")
    this.router.navigate(['home-page'])
    return false;
    
   }
   else{
    return true;
   }
 }
 
  



}
