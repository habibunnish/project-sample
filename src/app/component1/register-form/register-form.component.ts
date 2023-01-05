import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormFileds, FormFiledsJSON } from '../form-field';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{
  formFields:FormFiledsJSON[]=[]
  dynamicForm=this.fb.group({});
  
  constructor(private registerService:RegisterService , private fb:FormBuilder) {}

  ngOnInit(){
    this.getDynamicFormFields();
  }
  getDynamicFormFields(){
    this.registerService.getFormFileds().subscribe(
      (response:FormFileds)=>{
      this.formFields=response.data;
      this.setDynamicForm(response.data);
      }
    )
  }
  setDynamicForm(controls:FormFiledsJSON[]){
    for(const control of controls){
      this.dynamicForm.addControl(control.name, this.fb.control(control.value))
    }

  }
  saveForm(){
    console.log(this.dynamicForm.value);
  }
}
