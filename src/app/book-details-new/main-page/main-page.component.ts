import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'src/app/services/guards/booking.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  implements OnInit{

   bookingList:any;
  // @Input()
  // bookingList:any;
  // @Output()
  // childMessage=new EventEmitter()

  // chennais() {
  //   console.log('on submit');
  //   this.childMessage.emit( this.chennai());
  // }

 
  constructor(config: NgbCarouselConfig, private router: Router,private booking:BookingService) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  ngOnInit() {
 
  }
  chennai() {
    this.router.navigate(['location1']);
    this.booking.getProducts().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });

  }
  goa() {
    this.router.navigate(['location1']);
  }
  banguluru() {
    this.router.navigate(['location1']);
  }
  jammu() {
    this.router.navigate(['location1']);
  }
}
