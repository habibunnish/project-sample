import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  name:string='';
  file:any;
  
  ProductTitle: any;
  Location: any;
  Price: any;
  Image: any;

  constructor(  private adminService:AdminService ,private http:HttpClient){}

  //post
  addProduct(){
    const newData={
      ProductTittle:this.ProductTitle,
      Location:this.Location,
      Price:this.Price,
      Image:this.Image
    };
    this.adminService.addProductDetails(newData).subscribe(data=>{
      console.log(data);
    })
  }

  //put
     UpdateProduct(contactId:any){
      const newData={ ProductTittle:"the china town",  Location:"Delhi", Price:"3000"}
      this.adminService.UpdateProduct(contactId ,newData).subscribe(data=>{
        console.log(data);
       
      })
   }
 //fileuploading
    getName(name: string) {
      this.name=name;
     
    }
    getFile(event:any) {
      this.file=event.target.files[0];
      console.log('file',this.file);
    }
    submitData(){
      let formData=new FormData();
      formData.set("name",this.name);
      formData.set("file",this.file);

      this.http.post('http://localhost:3000/product',formData).subscribe(res=>{
        console.log(res);
      })
    }

}
