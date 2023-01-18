import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss']
})
export class HowItWorkComponent {
  constructor(private router:Router){}
  book(){
    this.router.navigate(['login-form']);
  }
}
