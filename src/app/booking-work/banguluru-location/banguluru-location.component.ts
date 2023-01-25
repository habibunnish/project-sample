import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-banguluru-location',
  templateUrl: './banguluru-location.component.html',
  styleUrls: ['./banguluru-location.component.scss'],
})
export class BanguluruLocationComponent implements OnInit {
  counts:any;
  constructor(
    private router: Router,
    private booking: BookingService,
    private cartService: CartService
  ) {}

  public bookingList: any;
  ngOnInit() {
    this.getproductbangaluru();
  }
  getproductbangaluru() {
    this.booking.getProductbangluru().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });
  }

  addto(item: any) {
    delete item.id;
    console.log('adding');
    this.addingindatabase(item);
    // this.cartService.count()
    // this.cartService.addtoCartbangaluru(item);
    alert("ITEMA ADDED SUCCESSFULLY");
    
  }
  increse(){
    this.cartService.count()
  }
  addingindatabase(item:any){
    this.cartService.postaddcartDetailsOfAllLocation(item).subscribe(data=>{
      console.log(data);
    })
  }
  

  viewpage() {
    this.router.navigate(['confirm-page']);
  }
  GoBack() {
    this.router.navigate(['booking-page']);
  }
  
}
