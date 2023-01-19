import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/guards/cart.service';
import { UserBookedHistoryService } from '../services/guards/user-booked-history.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit{
 
  public product: any ;
 
  ProductTitle: any;
  Email:any;
  Location: any;
  Price: any;
  Image: any;
  file: any;
  constructor(private cartService:CartService,private router:Router,private UserBooked:UserBookedHistoryService){}
    //post
    addProduct(item:any){
      item.id=null;
      console.log('print',item);
       this.UserBooked.UserBookedData(item).subscribe(data=>{
        console.log(data);
        alert('product added successfully');
       
      })
    // if(localStorage.getItem('userData')!=null){
    //   var email = JSON.parse(localStorage.getItem('userData') || '{}');
    //   item.email=email.email;
    //   console.log('getting email');
    // }

      }
   book(item:any){
      alert("are you sure u want to book now press ok to book this room ");
      this.addProduct(item);
     }
   

  ngOnInit(){
    this.getproduct();
  }

  getproduct(){
    console.log("getproduct()")
    this.cartService.getProducts().subscribe(res=>{
    this.product=res;
    console.log(this.product);
     })
  }

  delete(item:any){
    console.log("deleteproduct",item.id);
    this.cartService.removecartItem(item);
   }
  goback(){
    this.router.navigate(['home-page'])
  }
 
}
