import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  constructor(config:NgbCarouselConfig){
    config.interval=4000;
    config.wrap=true;
    // config.keyboard=false;
    config.pauseOnHover=false;
   }
}
