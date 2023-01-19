import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getuser() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }
//getlogin
  getUserLogin(){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.get('http://localhost:3000/userLogin', {headers:httpHeaders});
  }
  //login post
  addNewContactUser(createResource:any){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.post('http://localhost:3000/userLogin/', createResource, {headers:httpHeaders});
  }

  //register post
  addNewUserRegisterDetails(registerResource:any){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' ,'application/json');
    return this.httpClient.post('http://localhost:3000/userRegister/',registerResource ,{headers:httpHeaders});
  }
  // loginget=()=>{
  //   if(this.getuser()){
  //     return true
  //   }
  //   else{
  //     return false;
  //   }
  //   getuser=()=>{
  //    return localStorage.getItem('email')
  //   }
  // }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
}
