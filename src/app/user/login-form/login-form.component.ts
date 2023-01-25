import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
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
    console.log('adding');
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe((data) => {
      console.log(data);
      // this.router.navigate(['home-page']);
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
            // this.addNewContact();
            this.router.navigate(['booking-page']);
          }
        }        
      });
  }

 
  //   Object.keys(formGroup.controls).forEach((field) => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }
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
