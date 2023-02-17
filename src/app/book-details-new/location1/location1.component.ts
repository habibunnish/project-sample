import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/guards/admin.service';
import { CartService } from 'src/app/services/guards/cart.service';


@Component({
  selector: 'app-location1',
  templateUrl: './location1.component.html',
  styleUrls: ['./location1.component.scss']
})
export class Location1Component implements OnInit  {
 
  duplicateLocationList :any=[]

  bookingList: any;
  state: any;

  constructor(
    private router:Router, 
    private cartService: CartService,
    private admin:AdminService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    this.state = this.activatedRoute.snapshot.params['state'];
    this.noDuplication();
   
  }

  noDuplication(){
    this.admin.getProduct().subscribe((res) => {
      this.bookingList = res;
    for(var i =0;i<this.bookingList.length;i++){
      if(this.bookingList[i].location==this.state){
        this.duplicateLocationList.push(this.bookingList[i])
      }
    }
    //  console.log(res);
     // console.log(this.duplicateLocationList);
      this.bookingList=this.duplicateLocationList;
    });
  }

  addto(item: any) {
    console.log("adding in");
    this.addingindatabase(item);
    alert("ITEMA ADDED SUCCESSFULLY");
    this.router.navigate(['add-to-cart']);
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
