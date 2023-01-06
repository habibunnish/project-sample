import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent {
  constructor(private loginService:LoginService){}
  LoginList:any;
  msgTrue=false;

  //get
  ngOnInit(): void {
      this.LoginList=this.loginService.getUserLogin().subscribe(data=>{
        console.log(data);
        this.LoginList=data;
      })
  }
  //post
  addNewContact(){
    const newFormData={
      firstname:'Santosh',
      password:'san%321',
      email:'santosi@123',
      // "id":2
    };
    console.log('testing');
    this.loginService.addNewContactUser(newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }
}
