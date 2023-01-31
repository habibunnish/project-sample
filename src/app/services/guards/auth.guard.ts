import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authservice:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let adminin=this.authservice.adminAuthenticated();
    let userin=this.authservice.isauthenticated();
     if(userin||adminin){
      return true;
     }
     else {
      this.authservice.isauthenticated();
      this.authservice.adminAuthenticated();
      return false;
     }
    
  }
  
  //////////////////////////////////////////////////////////


}