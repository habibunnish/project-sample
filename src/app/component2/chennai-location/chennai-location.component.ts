import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chennai-location',
  templateUrl: './chennai-location.component.html',
  styleUrls: ['./chennai-location.component.scss']
})
export class ChennaiLocationComponent {

  constructor(private router:Router){}
  confirmpage1() {
    this.router.navigate(['confirm-page']);
  }
  confirmpage2(){
    this.router.navigate(['chennai-page1'])
  }

}
