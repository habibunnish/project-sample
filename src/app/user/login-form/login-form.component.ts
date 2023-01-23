import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/guards/AuthsService';
import { LoginService } from '../../services/guards/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  type: string = 'password';
  loginForm!: FormGroup;
  logouts:any;
  showlogout:boolean=false;
  isLoggedInside!: Observable<boolean>;
  ngOnInit() {
    this.loginForm = this.fb.group({
      firstname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  
   this.isLoggedInside=this.authsSErvice.isUserloggedIn;
  }

  logindata: any;
  msgTrue = false;
  firstname: string = '';
  password: any;
  email: any;
  //post
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authsSErvice:AuthService
  ) {}
  addNewContact() {
    console.log('adding');
    const newFormData = {
      firstname: this.firstname,
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe((data) => {
      console.log(data);
      this.router.navigate(['home-page']);
      this.msgTrue = true;
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
            this.showlogout=true;
          
            console.log('printing');
            this.addNewContact();
            this.router.navigate(['home-page']);
          }
        }
        
      });
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  //sending to register
  onsubmit() {
    console.log('on submit');
    this.router.navigate(['register-form']);
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
}
