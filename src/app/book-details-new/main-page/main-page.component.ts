import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

   bookingList:any;
  
   constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  
  chennai() {
    this.router.navigate(['location1/'+'Chennai'])
  }
  goa() {
    this.router.navigate(['location1/'+'goa']);
  }
  banguluru() {
    this.router.navigate(['location1/'+'Banguluru']);
  }
  jammu() {
    this.router.navigate(['location1/'+'Jammu']);
  }
}
