import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.directive';
import { identityRevealedValidator } from '../identity-revealed.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
newForm!: FormGroup;

Genders=['female','male','transgender'];

name={Firstname:'Mr/Ms',LastName:'lastname',Gender:this.Genders[0],address:'current address your',email:''}

ngOnInit(){
  this.newForm=new FormGroup({
    Firstname:new FormControl(this.name.Firstname,[
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/abcd/i)    
    ]),
    
   
    Gender:new FormControl(this.name.Gender,Validators.required)
  },{validators:identityRevealedValidator});

  
}
get Firstname(){
  return this.newForm.get('Firstname')!;
}
get LastName(){
  return this.newForm.get('LastName')!;
}

get Gender(){
  return this.newForm.get('Gender')!;
}
get Address(){
  return this.newForm.get('Address')!;
}
get email(){
  return this.newForm.get('email');
}

}

