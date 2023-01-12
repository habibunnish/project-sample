import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  type:string="password";
  loginForm!:FormGroup;

  ngOnInit(){
    this.loginForm=this.fb.group({
      firstname:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required]
    })
  }

  logindata:any;
  msgTrue = false;
  firstname: string = '';
  password: any;
  email: any;
   //post
  constructor(private loginService: LoginService, private fb:FormBuilder,private router: Router ) { }
  addNewContact() {
    const newFormData = {
      firstname: this.firstname,
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    })
  }


  submit() {
    console.log(this.validateAllFormFields(this.loginForm));
    this.router.navigate(['booking-page'])
  }

 //sending to register
  onsubmit() {
    this.router.navigate(['register-form'])
  }

  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }

  
   //storing oon local storage login data
  saveData() {
   const userData={

    password:this.password,
    email:this.email,
    // id:''
   };
   sessionStorage.setItem('userData',JSON.stringify(userData))
  }
  getdata(){
      return sessionStorage.getItem('userdata');
  }
nextpage(){
  this.router.navigate(['booking-page'])
}



  hideshowpass() {
    // this.istext=!this.istext;
    // this.istext?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    // this.istext?this.type="text":this.type="password";
  }
}
