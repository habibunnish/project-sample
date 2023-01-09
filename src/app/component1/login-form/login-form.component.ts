import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  logindata:any;
  msgTrue = false;
  firstname: string = '';
  password: any;
  email: any;


  //post
  constructor(private loginService: LoginService, private router: Router) { }
  addNewContact() {
    const newFormData = {
      firstname: this.firstname,
      password: this.password,
      email: this.email,
      // "id":2
    };
    this.loginService.addNewContactUser(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    })
  }


  submit(login: any) {
      console.log("form submitted")
  }

 //sending to register
  onsubmit() {
    this.router.navigate(['register-form'])
  }

  
   //storing oon local storage login data
  saveData() {
   const userData={
    firstname:this.firstname,
    password:this.password,
    email:this.email,
    // id:''

   };
   localStorage.setItem('userData',JSON.stringify(userData));
  //  const data=localStorage.getItem('userData');
  //  console.log('data:' ,JSON.parse(data))
  }
focusing(element: any){
  console.log('focusing this')
}

}
