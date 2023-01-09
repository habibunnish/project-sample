import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chennai-location',
  templateUrl: './chennai-location.component.html',
  styleUrls: ['./chennai-location.component.scss']
})
export class ChennaiLocationComponent {
  constructor(private router:Router){}
  login() {
    this.router.navigate(['login-form'])
}

}
