import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/guards/booking.service';
import { AdminService } from '../../services/guards/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  file: any;
  ProductTitle: any;
  Location: any;
  Price: any;
  Image: any;

  constructor(private adminService: AdminService, private http: HttpClient, private router: Router, private bookingService: BookingService) { }

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
  UpdateProduct(contactId: any) {
    const newData = { ProductTittle: "the china town", Location: "Delhi", Price: "3000", Image: 'bangaluru', file: "bangaluru.jpg" }
    this.adminService.UpdateProduct(contactId, newData).subscribe(data => {
      console.log(data);
      alert('product edited successfully')

    })
  }

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
