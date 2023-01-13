import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient ) { }

  //getProduct
  getProduct(){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type',"application/json");
    return this.httpClient.get('http://localhost:3000/product',{headers:httpHeaders});
  }

  //post
    addProductDetails(createResource:any){
      const httpHeaders=new HttpHeaders();
      httpHeaders.append('content-type' , 'application/json');
      return this.httpClient.post('http://localhost:3000/product',createResource ,{headers:httpHeaders});
      
    }
  
 

    //put
    UpdateProduct(contactId:string ,UpdatedBody:any){
      return this.httpClient.put('http://localhost:3000/product/'+contactId,UpdatedBody);
    }

      deleteProduct(id:number){
      return this.httpClient.delete('http://localhost:3000/product/'+id)
       
    
    }
    getCart(){
      const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type',"application/json");
      return this.httpClient.get('http://localhost:3000/product',{headers:httpHeaders})
    }
}
