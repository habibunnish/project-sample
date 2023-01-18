
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/guards/login.service';


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
    console.log("adding");
    const newFormData = {
      firstname: this.firstname,
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['home-page'])
      this.msgTrue = true;
    })
  }


  submit() {
      this.saveData();
      this.addNewContact();
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
   //sending to register
   onsubmit() {
    console.log("on submit");
    this.router.navigate(['register-form'])
  }

  //storing oon local storage login data
  saveData() {
    console.log('localstoragw');
    const userData={
    password:this.password,
    email:this.email,
   };
   localStorage.setItem('userData',JSON.stringify(userData))
  
  }
}
