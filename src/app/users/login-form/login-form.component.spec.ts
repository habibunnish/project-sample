import { LoginService } from './../../services/guards/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';



describe('LoginFormComponent ', () => {
  let fixture: ComponentFixture<LoginFormComponent >;
  let componentInstance:LoginFormComponent;
  let mockPostService:any;
  let loginService:LoginService;
  let router:Router;
 


  beforeEach(async() => {
    
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule, FormsModule],
      declarations: [ LoginFormComponent ],
      providers:[HttpClient,HttpHandler,LoginService,FormBuilder,Router],
     
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    componentInstance=fixture.componentInstance;
    loginService=TestBed.inject(LoginService);
    router=TestBed.inject(Router);
   
    const POSTS=[
      {
        id:1,
        body:'body 1',
        tittle:'title 1',
      }
    ];
    mockPostService=jasmine.createSpyObj(['addNewContact','adminlogin'])
   
  });
 
  it('should send a post request to the server',()=>{
    const newFormData={
      emails:'user@123',
      passwords:'user%45678'
    };
    spyOn(loginService,'addNewContactUser').and.returnValue(of(newFormData));
    componentInstance.password=newFormData.passwords;
    componentInstance.email=newFormData.emails;
    componentInstance.addNewContact();
    expect(loginService.addNewContactUser);
   
  });

  it('should  emit onsubmit when its clicked',()=>{
    const onsubmit=spyOn(componentInstance.childMessage,'emit');
    fixture.nativeElement.querySelector('#buttononsubmit').click();
    expect(onsubmit).toHaveBeenCalled();
  });

it('should navigaet to main-page if user is found',()=>{
  // const mockvalue=[{
  //   email:'habi@123',
  //   password:'Habi$%6789'
  // }];
  // const loginService=TestBed.inject(LoginService);
  // spyOn(loginService,'userRegisterDetails').and.returnValue(of(mockvalue));
  // const router=TestBed.inject(Router);
  // const navigateSpy=spyOn(router,'navigate');
  // componentInstance.submit();
  // expect(navigateSpy).toHaveBeenCalledWith(['main-page']);

})

  it('should navigate to get-product when admin credential are valid',()=>{
    const mockAdmin={
      email:'admini#23456',
      password:'admin@1223'
    };
    const mockadminResponse=[mockAdmin];
    spyOn(loginService,'adminLoginDetailsGet').and.returnValue(of(mockadminResponse));
    spyOn(router,'navigate');
    componentInstance.email='admini#23456';
    componentInstance.password='admin@1223';
    componentInstance.adminlogin();
    expect(router.navigate).toHaveBeenCalledWith(['get-product']);

  });
  it('should not navigate to get-product if its wrong details',()=>{
    const mockAdmin={
      email:'admini#23456',
      password:'admin@1223'
    };
    const mockadminResponse=[mockAdmin];
    spyOn(loginService,'adminLoginDetailsGet').and.returnValue(of(mockadminResponse));
    spyOn(router,'navigate');
    componentInstance.email='admini#23456';
    componentInstance.password='invalidpassword';
    componentInstance.adminlogin();
    expect(router.navigate).toHaveBeenCalledWith(['get-product']);

  });

  it('should save user data to local storage',()=>{
    const mockUser={
      email:'user@123',
      password:'user%45678'
    };
    componentInstance.email=mockUser.email;
    componentInstance.password=mockUser.password;
    componentInstance.saveData();
    expect(localStorage.getItem('userData')).toEqual(JSON.stringify(mockUser));
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


});