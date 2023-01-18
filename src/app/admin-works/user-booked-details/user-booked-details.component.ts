import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/guards/cart.service';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';

@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss']
})
export class UserBookedDetailsComponent implements OnInit {
  Productuser:any;
  constructor(private cartService:CartService,private userbooked:UserBookedHistoryService){}
  ngOnInit() {
    this.getproduct();
  }
  //get
  getproduct(){
    console.log('getproduct ');
    this.cartService.getProducts().subscribe(res=>{
      this.Productuser=res
      console.log(this.Productuser);
    })
  }
  //post
  bookdata(item:any){
    console.log('booked data method calling');
    this.userbooked.UserBookedData(item).subscribe(res=>{
      this.Productuser=res;
      console.log(this.Productuser)
    })
  }


}
