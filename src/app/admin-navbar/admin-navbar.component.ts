import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent {
constructor(private router:Router){}

onlogout() {
this.router.navigate(['home-page'])
}


}
