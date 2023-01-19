import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddNewDataService } from '../services/guards/add-new-data.service';
import { AdminService } from '../services/guards/admin.service';
import { BookingService } from '../services/guards/booking.service';



@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.scss'],
  // providers:[adddatas1]

})
export class AddNewDataComponent implements OnInit{
  file: any;
  id:any;
  roomdetails={
    id:0,
    tittle:"",
    location:"",
    price:"",
    image:"",
    email:"",
  }
  constructor( 
    private http: HttpClient,
    private router: Router, 
    private bookingService: BookingService,
    private adminService:AdminService,
    private addnewdataService:AddNewDataService,
    private activatedRoute:ActivatedRoute
    ) { }

 
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.GetEdits()
 }
  GetEdits(){
    this.addnewdataService.getedit(this.id).subscribe(data=>{
    console.log(data);
    this.roomdetails=data;
    // console.log("getedit method calling")

    })
  }


  //ADD BUTTON
  adding(roomdetails:any){
    roomdetails.image=this.file.name;
    this.addnewproduct(roomdetails);
    alert('product added successfully');
    this.addProduct(roomdetails);
  }

  //post
  addnewproduct(roomdetails:any){
    console.log(roomdetails);
    console.log('addnewproduct()');
  
    this.bookingService.addProductsDetails(roomdetails).subscribe(res=>{
    console.log(res);
    })
    // this.bookingService.addProductsDetailsbangluru(adddatas1).subscribe(res=>{
    //   console.log(res);
    // })
    // this.bookingService.addProductsDetailsroyapuram(adddatas1).subscribe(res=>{
    //   console.log(res);
    // })
    // this.bookingService.addProductsDetailsjammu(adddatas1).subscribe(res=>{
    //   console.log(res);
    // })
   }

   //post for showing in page
   addProduct(roomdetails:any) {
    console.log("addproduct method calling");
    console.log(roomdetails);
    this.adminService.addProductDetails(roomdetails).subscribe(res => {
      console.log(res);
      alert('product added successfully');

    });

  }



   putting(){
    this.UpdateputProduct();
   }
   //put
   UpdateputProduct(){
    console.log(this.roomdetails);
      this.adminService.putproductchennai(this.roomdetails.id,this.roomdetails).subscribe(data=>{
        console.log(data);
        alert('product edited successfully')
      })
   }
   
  //delete
   deletedata(data:any){
    console.log("delete data() calling ",data.id)
   this.bookingService.deleteproductchennai(data.id).subscribe(res=>{
    console.log(res);
   })
   alert("deleted this details");
   }

  //fileuploading
   getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file.name);
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
