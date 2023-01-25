import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';

class adddatas1 {
  static email: any;
}

@Component({
  selector: 'app-chennai-location',
  templateUrl: './chennai-location.component.html',
  styleUrls: ['./chennai-location.component.scss'],
  providers: [adddatas1],
})
export class ChennaiLocationComponent implements OnInit {
  cartdis: any = [];
  email: any;
  showemail: boolean = false;
  constructor(
    private router: Router,
    private booking: BookingService,
    private cartService: CartService,
    private UserBooked: UserBookedHistoryService
  ) {}

  public bookingList: any;
  ngOnInit() {
    this.booking.getProducts().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });
  }
  addto(item: any) {

    this.addingindatabase(item)
    console.log('adding');
    this.addtocartdis(item);
    console.log('cartdids');
  //  this.cartService.count()
   alert("ITEMA ADDED SUCCESSFULLY")
  }
  addingindatabase(item:any){
    this.cartService.postaddcartDetailsOfAllLocation(item).subscribe(data=>{
      console.log(data);
    })
    alert("ITEMA ADDED SUCCESSFULLY")
  }
 

  GoBack() {
    this.router.navigate(['booking-page']);
  }
  emailvisible() {
    this.showemail = !this.showemail;
  }
  addtocartdis(item: any) {
    console.log(item);
    this.UserBooked.cart(this.cartdis).subscribe((res) => {
      this.cartdis = res;
      console.log(res);
      let validate = false;
      this.cartdis.forEach((a: any) => {
        if (item.id === a.id && this.email === a.email) {
          // alert('alerady taken');
          validate = true;
        }
      });
      console.log(validate);
      if (!validate) {
        alert('you have choosed crct once  only');
        item.email = this.email;
        //  this.cartdis.push(item);
         this.cartService.addtoCarts(item);
      }
    });
  }
}
