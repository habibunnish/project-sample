import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/guards/cart.service';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';

@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss'],
})
export class UserBookedDetailsComponent implements OnInit {
  Productuser: any;
  items:any;
  constructor(
    private cartService: CartService,
    private userbooked: UserBookedHistoryService
  ) {}
  ngOnInit() {
    this.getalldetailsOfLocation();
  }
  //get
  getalldetailsOfLocation(){
    this.cartService.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.items=data;
      console.log(this.items);
      console.log(data);
    })
  }
 
  //post
  // bookdata(item: any) {
  //   console.log('booked data method calling');
  //   // if (localStorage.getItem('userData') != null) {
  //   //   var email = JSON.parse(localStorage.getItem('userData') || '{}');
  //   //   item.email = email.email;
  //   //   console.log('getting email');
  //   // }
  //   this.userbooked.UserBookedData(item).subscribe((res) => {
  //     this.Productuser = res;
  //     console.log(this.Productuser);
  //   });
  // }
}
