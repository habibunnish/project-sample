import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  getUserLogin(){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.get('http://localhost:3000/userLogin', {headers:httpHeaders});
  }
  addNewContactUser(createResource:any){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.post('http://localhost:3000/userLogin/', createResource, {headers:httpHeaders});
  }

  
}
