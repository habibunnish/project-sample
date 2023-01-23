import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomePageComponent {
  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  bookpage() {
    this.router.navigate(['booking-page']);
    console.log('going to book page');
  }
}
