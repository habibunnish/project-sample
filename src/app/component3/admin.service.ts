import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient ) { }

  //post
    addProductDetails(createResource:any){
      const httpHeaders=new HttpHeaders();
      httpHeaders.append('content-type' , 'application/json');
      return this.httpClient.post('http://localhost:3000/product',createResource ,{headers:httpHeaders});
      
    }
    //put
    UpdateProduct(contactId:string ,UpdatedBody:any){
      return this.httpClient.put('http://localhost:3000/product',contactId,UpdatedBody);
    }
}
