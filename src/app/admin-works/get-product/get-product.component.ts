
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/guards/admin.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit{


  constructor(private adminService:AdminService , private router:Router){}
 public ProductList: any;

  //get
  ngOnInit(): void {
    this.ProductList=this.adminService.getProduct().subscribe(data=>{
      console.log(data, this.ProductList );
      this.ProductList = data
    })
  }
  //delete product
   deletedata(data:any){
    console.log("ggjgfggh")
   this.adminService.deleteProduct(data.id).subscribe(res=>{
    alert(" product deleted successfully");
      })
   }

  add(){
    this.router.navigate(['add-product']);
  }
  edit(){
    this.router.navigate(['add-product']);
  }
}
