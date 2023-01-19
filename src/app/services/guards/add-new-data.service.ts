
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AddNewDataService {
  constructor(private httpClient:HttpClient){}
  getedit(id:any){
    console.log(id);
    return this.httpClient.get(`http://localhost:3000/product/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // putproductchennai(UpdatedBody:any){
  //   return this.httpClient.put('http://localhost:3000/product/',UpdatedBody);
  // }

}
