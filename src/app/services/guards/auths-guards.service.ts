import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthsService';
@Injectable({
  providedIn: 'root'
})
export class AuthsGuardsService {

  constructor(private authsService:AuthService,private router:Router) { }
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    let isLoggedIn = this.authsService.isAuthenticated();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login-form'])
      return false;
    }
  }
}
