export class AuthService {
  isLoggedIn = false;
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = true;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
