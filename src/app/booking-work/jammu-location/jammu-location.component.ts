import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jammu-location',
  templateUrl: './jammu-location.component.html',
  styleUrls: ['./jammu-location.component.scss']
})
export class JammuLocationComponent {
  constructor(private router:Router){}
  login() {
    this.router.navigate(['login-form'])
}

}
