import { BehaviorSubject } from "rxjs";

export class AuthService {
  private loggedInside:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
private isAuthenticatednew=false;

    isLoggedIn = false;
    login() {
      this.isLoggedIn =true;
    }
    logout() {
      this.isLoggedIn =true;
    }
    isAuthenticated() {
      return this.isLoggedIn;
    }
    get isUserloggedIn(){
      return this.loggedInside.asObservable()
    }
    getIsAuth(){
      return this.isAuthenticatednew;
    }
}