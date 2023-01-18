import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-banguluru-location',
  templateUrl: './banguluru-location.component.html',
  styleUrls: ['./banguluru-location.component.scss']
})
export class BanguluruLocationComponent implements OnInit{
  // public productList:any;
  // ProductTitle: any;
  // Location: any;
  // Price: any;
  // Image: any;
  // file: any;

  //   //post
  //   addProduct(){
  //     const newData={
  //       ProductTittle:this.ProductTitle,
  //       Location:this.Location,
  //       Price:this.Price,
  //       Image:this.Image,
  //       file:this.file
  //     };
  //     this.adminService.addProductDetails(newData).subscribe(data=>{
  //       console.log(data);
  //       alert('product added successfully');
       
  //     })
  //   }
  constructor(private router:Router,private booking:BookingService,private cartService:CartService){}

  public bookingList:any;
  ngOnInit(){
     this.getproductbangaluru();
    }
    getproductbangaluru(){
      this.booking.getProductbangluru().subscribe(res=>{
         this.bookingList=res;
         console.log(res);
         })
    }
   
     addto(item:any){
        console.log('adding')
        this.cartService. addtoCartbangaluru(item);
     }
 
     viewpage(){
        this.router.navigate(['confirm-page'])
    }
     GoBack(){
        this.router.navigate(['booking-page'])
     }
}
