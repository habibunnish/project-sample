import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-royapuram',
  templateUrl: './royapuram.component.html',
  styleUrls: ['./royapuram.component.scss']
})
export class RoyapuramComponent {
  constructor(private router:Router,private booking:BookingService,private cartService:CartService){}

  public bookingList:any;
  ngOnInit(){

    this.booking.getProductroyapuram().subscribe(res=>{
      this.bookingList=res;

      console.log(res);
      })
    }
     addto(item:any){
      console.log('adding')
        this.cartService.addtoCartroyapuram(item);
     }
  
    GoBack(){
      this.router.navigate(['booking-page'])
    }
}
