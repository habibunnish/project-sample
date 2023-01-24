import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  public product: any;
  items:any;
  ProductTitle: any;
  Email: any;
  Location: any;
  Price: any;
  Image: any;
  file: any;
  item: any;
  constructor(
    private cartService: CartService,
    private router: Router,
    private UserBooked: UserBookedHistoryService
  ) {}
  //post
  addProduct(item: any) {
    item.id = null;
    console.log('print', item);
    if (localStorage.getItem('userData') != null) {
      var email = JSON.parse(localStorage.getItem('userData') || '{}');
      item.email = email.email;
      console.log('getting email');
    }
    this.UserBooked.UserBookedData(item).subscribe((data) => {
      console.log(data);
     
      alert('product added successfully');
    });
   
  }
  book(item: any) {
    alert('are you sure u want to book now press ok to book this room ');
    this.addProduct(item);

  }

  ngOnInit() {
   this.getalldetailsOfLocation();
    
  }

  getalldetailsOfLocation(){
    this.cartService.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.items=data;
      console.log(this.items);
      console.log(data);
    })

  }

  delete(item: any) {
    console.log('deleteitems', item.id);
    this.cartService.deleteAllCartLocation(item.id).subscribe(data=>{
      this.getalldetailsOfLocation();
      console.log(data);
    })
   
   
  }
 
  goback() {
    this.router.navigate(['home-page']);
  }
}
