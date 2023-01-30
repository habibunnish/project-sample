import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userin=false;
adminin=false;
userloggedin(){
this.userin=true;
}
 isauthenticated(){
  return this.userin
 }

/////////////////////////

adminloggedin(){
  this.adminin=true;
}
adminAuthenticated(){
  return this.adminin
}

}
