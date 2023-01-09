import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goa-location',
  templateUrl: './goa-location.component.html',
  styleUrls: ['./goa-location.component.scss']
})
export class GoaLocationComponent {
  constructor(private router:Router){}
 
 login() {
    this.router.navigate(['login-form'])
}

}