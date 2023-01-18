import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-jammu-location',
  templateUrl: './jammu-location.component.html',
  styleUrls: ['./jammu-location.component.scss']
})
export class JammuLocationComponent {
  constructor(private router:Router,private booking:BookingService,private cartService:CartService){}

  public bookingList:any;
  ngOnInit(){
    this.booking.getProductjammu().subscribe(res=>{
      this.bookingList=res;

      console.log(res);
      })
    }
     addto(item:any){
      console.log('adding')
        this.cartService.addtoCartsjammu(item);
     }
    GoBack(){
      this.router.navigate(['booking-page'])
    }

}
