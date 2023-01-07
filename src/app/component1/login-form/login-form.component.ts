import { Component} from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  msgTrue=false;
  firstname: string ='';
  password: any;
  email: any;

  constructor(private loginService:LoginService){}
  addNewContact(){
    const newFormData={
      firstname:this.firstname,
      password:this.password,
      email:this.email,
      // "id":2
    };
    this.loginService.addNewContactUser(newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }

  
  submit(login:any){
    console.log("form submitted" )
  }
}
