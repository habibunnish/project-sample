import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/guards/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
 
  @Output()
  childMessage=new EventEmitter()
  emails: any;
  passwords: any;
 
 

  onsubmit() {
    console.log('on submit');
   this.childMessage.emit( this.store());
  }

  admin: any;
  type: string = 'password';
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  password: any;
  email: any;
  //post
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {}
  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe((data) => {
      console.log(data);
    });
  }

  submit() {
    this.http
      .get('http://localhost:3000/userRegister')
      .subscribe((res: any) => {
        console.log(res);
        for (let user of res) {
          if (user.email == this.loginForm.value.email) {
            this.saveData();
            this.router.navigate(['main-page']);
          }
        }  
      });
      this.adminlogin();
     
  }
  store(){
    this.router.navigate(['register-form'])
  }

  //storing oon local storage login data
  saveData() {
    console.log('localstorage');
    const userData = {
      password: this.password,
      email: this.email,
    };   
    localStorage.setItem('userData', JSON.stringify(userData));
   
  }

  adminlogin(){
    this.loginService.adminLoginDetailsGet().subscribe((data)=>{
      console.log(data);
      this.admin=data;
      for(let admindetails of this.admin){
        if(admindetails.email==this.email && admindetails.password==this.password){
         this.router.navigate(['get-product']);
        }
      }
    });
   }

  //  asavedata(){
  //   console.log('admin-localstorage');
  //   const adminData=[
  //   this.password=this.password,
  //   this.email=this.email
  //   ]
  //   localStorage.setItem('adminData',JSON.stringify(adminData))
  //  }
}



