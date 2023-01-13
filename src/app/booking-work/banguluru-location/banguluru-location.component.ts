import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/guards/admin.service';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-banguluru-location',
  templateUrl: './banguluru-location.component.html',
  styleUrls: ['./banguluru-location.component.scss']
})
export class BanguluruLocationComponent implements OnInit{
  public productList:any;
  ProductTitle: any;
  Location: any;
  Price: any;
  Image: any;
  file: any;

  constructor(private router:Router,private adminService:AdminService,private cartService:CartService){}
  banguluruconfirm1() {
    this.router.navigate(['banguluru-confirm-page'])
   }
   banguluruconfirm2(){
    this.router.navigate(['banguluru-page1'])
   }
  
   ngOnInit(): void {
    this.adminService.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }
    //post
    addProduct(){
      const newData={
        ProductTittle:this.ProductTitle,
        Location:this.Location,
        Price:this.Price,
        Image:this.Image,
        file:this.file
      };
      this.adminService.addProductDetails(newData).subscribe(data=>{
        console.log(data);
        alert('product added successfully');
       
      })
    }
}
