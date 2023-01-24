import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userin=false;

userloggedin(){
this.userin=true;
}
 isauthenticated(){
  return this.userin
 }
}
