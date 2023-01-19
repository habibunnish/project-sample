import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { AdminService } from '../../services/guards/admin.service';
import { ActivatedRoute } from '@angular/router';
import { AddNewDataService } from 'src/app/services/guards/add-new-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  id:any;
  file: any;
  ProductTitle: any;
  Location: any;
  Price: any;
  Image: any;

  constructor(private adminService: AdminService, private http: HttpClient, private router: Router, private bookingService: BookingService,private activatedRoute: ActivatedRoute,private addnewdataService:AddNewDataService) { }

  
ngOnInit() {
  this.id=this.activatedRoute.snapshot.params['id'];
    this.GetEdits()
  // this.activatedRoute.params.subscribe(params => {
  //   const id = params['id'];
  //   console.log('Url Id: ',id);
  //     })
      this.GetEdits();


}

GetEdits(){
  console.log("getedit method calling")
  this.addnewdataService.getedit(this.id).subscribe(data=>{
   
    console.log(data);
  })
}
  //post for storing in database of admin
  addProduct() {
    console.log("addproduct method calling");
    const newData = {
      ProductTittle: this.ProductTitle,
      Location: this.Location,
      Price: this.Price,
      Image: this.Image,
      file: this.file.name
    };
    this.adminService.addProductDetails(newData).subscribe(data => {
      console.log(data);
      alert('product added successfully');

    });

  }
   

  //put
  // UpdateProduct(contactId: any) {
  //   const newData = { ProductTittle: "the china town", Location: "Delhi", Price: "3000", Image: 'bangaluru', file: "bangaluru.jpg" }
  //   this.adminService.UpdateProduct(contactId, newData).subscribe(data => {
  //     console.log(data);
  //     alert('product edited successfully')

  //   })
  // }

  //fileuploading

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file.name);
    console.log("png");
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
