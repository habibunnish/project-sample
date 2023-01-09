import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banguluru-location',
  templateUrl: './banguluru-location.component.html',
  styleUrls: ['./banguluru-location.component.scss']
})
export class BanguluruLocationComponent {

  constructor(private router:Router){}
  login() {
    this.router.navigate(['login-form'])
}

}
