import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/guards/admin.service';
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

 
  constructor(config: NgbCarouselConfig, private router: Router,private booking:BookingService,private admin:AdminService) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    
  }
  chennai() {
    this.router.navigate(['location1'])
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
