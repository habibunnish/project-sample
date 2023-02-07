import { AddNewDataService } from './../../services/guards/add-new-data.service';
// import { componentInstance } from '@angular/common/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('LoginFormComponent ', () => {
  let component: LoginFormComponent ;
  let fixture: ComponentFixture<LoginFormComponent >;
//   let p:HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports:[FormsModule,ReactiveFormsModule,RouterTestingModule],
      providers:[HttpClient,HttpHandler],
     
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    // p=fixture.nativeElement.querySelector('p');
   
  });

//   it('should create', () => {
//     fixture.detectChanges();
//     fixture.whenStable().then(()=>{
//         const passwordElement:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#password');
//         passwordElement.value='';
//         passwordElement.dispatchEvent(new Event('input'));

//         const emailElement:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#email');
//         emailElement.value='';
//         emailElement.dispatchEvent(new Event('input'));

//         fixture.detectChanges();
//         fixture.whenStable().then(()=>{
//             const btnElement:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#button');
//             expect(btnElement.disabled).toBeFalse();
//              expect(component.loginForm.get('password')?.value).toEqual('');
//             expect(component.loginForm.get('email')?.value).toEqual('');
          
//         })
//     })
//     expect(component).toBeTruthy();
//   });
it('should bind the email and password to its formcontrol',()=>{
    const emailElement=fixture.debugElement.nativeElement.querySelector('#email');
    const emai=component.loginForm.get('email');

    const dummyvalue='123';
    emai?.setValue(dummyvalue);
    fixture.detectChanges();
     expect(emailElement.nativeElement.value).toEqual(dummyvalue);
     expect((emailElement.nativeElement as HTMLInputElement).value).toEqual(dummyvalue);
})

});