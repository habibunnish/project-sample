import { LoginService } from './../../services/guards/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



describe('LoginFormComponent ', () => {
  let fixture: ComponentFixture<LoginFormComponent >;
  let componentInstance:LoginFormComponent;
  let POSTS:any;
  let mockPostService:any;
  let loginspy

//   let p:HTMLElement;



  beforeEach(async() => {

    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule, FormsModule],
      declarations: [ LoginFormComponent ],
      providers:[HttpClient,HttpHandler,{provide:LoginService }],
     
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    componentInstance=fixture.componentInstance;

    POSTS=[
      {
        id:1,
        body:'body 1',
        tittle:'title 1',
      },
      {
        id:2,
        body:'body 2',
        tittle:'title 2',
      }
    ];
    mockPostService=jasmine.createSpyObj(['addNewContact','adminlogin'])
    // componentInstance=new LoginFormComponent(mockPostService);
  });
  it('should  emit onsubmit when its clicked',()=>{
    const onsubmit=spyOn(componentInstance.childMessage,'emit');
    fixture.nativeElement.querySelector('#buttononsubmit').click();
    expect(onsubmit).toHaveBeenCalled();


  })
  
  it('username and password is in required state', () => {
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
        const password:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#password');
        password.value='abcdef';
        password.dispatchEvent(new Event('input'));

        const email:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#email');
        email.value='abcdef';
        email.dispatchEvent(new Event('input'));

        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            expect(componentInstance.loginForm.valid).toBeFalsy()
         })
      })
  });
  
  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });
// it('check whther ng submit is called ',()=>{
//   fixture.detectChanges();
//   fixture.whenStable().then(()=>{
//     const password:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#password');
//     password.value='abcdef';
//     password.dispatchEvent(new Event('input'));
  
//     const email:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#email');
//     email.value='abcdef';
//     email.dispatchEvent(new Event('input'));

//     fixture.detectChanges();
//     fixture.whenStable().then(()=>{
//       const mockFunction=spyOn(componentInstance,'submit').and.callThrough();
//       const buttonElement:HTMLButtonElement=fixture.debugElement.nativeElement.querySelector('#button');
//       expect(buttonElement.disabled).toBeFalsy()
//       buttonElement.click();
//       expect(mockFunction).toHaveBeenCalledTimes(1);
//     })
//   })
//  })

});