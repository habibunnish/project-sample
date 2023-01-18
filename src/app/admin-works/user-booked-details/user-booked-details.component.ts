import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/guards/cart.service';

@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss']
})
export class UserBookedDetailsComponent implements OnInit {
  Product:any;
  constructor(private cartService:CartService){}
  ngOnInit() {
    this.getproduct();
  }
  getproduct(){
    console.log('getproduct ');
    this.cartService.getProducts().subscribe(res=>{
      this.Product=res
      console.log(this.Product);
    })
    
  }
}
