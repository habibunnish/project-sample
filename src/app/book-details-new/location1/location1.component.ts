import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { main } from '@popperjs/core';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-location1',
  templateUrl: './location1.component.html',
  styleUrls: ['./location1.component.scss']
})
export class Location1Component implements OnInit ,AfterViewInit {
 
  @ViewChild(MainPageComponent) mainpage: any;
  // message:any;
  location:any;
  locations=[
    {name:''},
    {name:'chennai'},
    {name:'goa'},
    {name:'bangalore'},
    {name:'jammu and kashmir'}

  ]

  bookingList: any;
  constructor(private router:Router, 
    private booking: BookingService,
    private cartService: CartService
  ){}

  ngOnInit() {
    this.booking.getProductroyapuram().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });
    this.booking.getProductjammu().subscribe((res) => {
      this.bookingList = res;

      console.log(res);
    });
    this.booking.getProductbangluru().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });
    this.booking.getProducts().subscribe((res) => {
      this.bookingList = res;
      console.log(res);
    });
    
  
  }

  changed(a:any){
    console.log(a)
    this.location=a.name;
   }
  ngAfterViewInit() {
    this.bookingList=this.mainpage.chennai()
  }

  addto(item: any) {
    console.log('adding');
     this.addingindatabase(item);
    console.log("addingin databse");
    alert("ITEMA ADDED SUCCESSFULLY");
    this.router.navigate(['add-to-cart'])
    // this.cartService.addtoCartroyapuram(item);
  }
  addingindatabase(item:any){
    this.cartService.postaddcartDetailsOfAllLocation(item).subscribe(data=>{
      console.log(data);
    })
  }

  GoBack(){
    this.router.navigate(['main-page']);
  }

 
}
