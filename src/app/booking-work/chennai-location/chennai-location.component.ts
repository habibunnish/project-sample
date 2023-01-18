import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-chennai-location',
  templateUrl: './chennai-location.component.html',
  styleUrls: ['./chennai-location.component.scss']
})
export class ChennaiLocationComponent  implements OnInit{

  constructor(private router:Router,private booking:BookingService,private cartService:CartService){}

  public bookingList:any;
    ngOnInit(){
       this.booking.getProducts().subscribe(res=>{
       this.bookingList=res;
       console.log(res);
      })
    }
     addto(item:any){
      console.log('adding')
        this.cartService.addtoCarts(item);
     }

    GoBack(){
      this.router.navigate(['booking-page'])
    }
  
}
