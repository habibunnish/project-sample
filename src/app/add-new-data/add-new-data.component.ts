import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/guards/booking.service';

class adddatas1{
  tittle:any;
  location:any;
  price:any;
  image:any;
  email:any;
}

@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.scss'],
  providers:[adddatas1]

})
export class AddNewDataComponent implements OnInit{
  file: any;

  constructor( private http: HttpClient, private router: Router, private bookingService: BookingService,public adddatas1:adddatas1) { }

 
  ngOnInit(){}

  adding(adddatas1:any){
    adddatas1.image=this.file.name;
    this.addnewproduct(adddatas1);
    alert('product added successfully');
  }

  //post
  addnewproduct(adddatas1:any){
    console.log(adddatas1);
    console.log('addnewproduct()');
    this.bookingService.addProductsDetails(adddatas1).subscribe(res=>{
    console.log(res);
    })
    this.bookingService.addProductsDetailsbangluru(adddatas1).subscribe(res=>{
      console.log(res);
    })
    this.bookingService.addProductsDetailsroyapuram(adddatas1).subscribe(res=>{
      console.log(res);
    })
    this.bookingService.addProductsDetailsjammu(adddatas1).subscribe(res=>{
      console.log(res);
    })
   }
   putting(contactId:any){
    // adddatas1.image=this.file.name;
    this.UpdateputProduct(contactId);
   }
   //put
   UpdateputProduct(contactId:any,){
    const newdatas={location:"tambaram"}
      this.bookingService.putproductchennai(contactId,newdatas).subscribe(data=>{
        console.log(data);
        alert('product edited successfully')
      })
   }


  //fileuploading

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file.name);
    console.log("png")
  }
  submitData() {
    let formData = new FormData();
    formData.set("file", this.file);

    this.http.post('http://localhost:3000/product', formData).subscribe(res => {
      console.log(res);
    })
  }
  checkdata() {
    this.router.navigate(['get-product']);
  }
 
}
