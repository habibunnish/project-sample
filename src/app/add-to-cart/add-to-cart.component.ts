import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/guards/admin.service';
import { CartService } from '../services/guards/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  public ProductList: any =[];
  constructor(private cartService:CartService,private adminService:AdminService){}
  //post
  add(){
    console.log("fghjkl");
    this.ProductList= this.cartService.getProducts().subscribe(data=>{
    this.ProductList=data;
    console.log(data);
    })
  }

  getProduct(){
    this.adminService.getCart().subscribe(data=>{
      this.ProductList=data;
      console.log(this.ProductList)
    })
  }
  delete(data:any){
    console.log("ggjgfggh")
   this.adminService.deleteProduct(data.id).subscribe(res=>{
    alert(" product deleted successfully");
      })
  }
  ngOnInit(): void {
    this.getProduct();
  }
}
