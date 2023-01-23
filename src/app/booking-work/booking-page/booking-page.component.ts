import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent {
  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  chennais() {
    this.router.navigate(['chennai-location']);
  }
  goa() {
    this.router.navigate(['royapuram']);
  }
  banguluru() {
    this.router.navigate(['banguluru-location']);
  }
  jammu() {
    this.router.navigate(['jammu-location']);
  }
}
