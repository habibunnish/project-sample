import { RegisterFormComponent } from './register-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('RegisterFormComponent ', () => {
  let component: RegisterFormComponent ;
  let fixture: ComponentFixture<RegisterFormComponent >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      providers:[HttpClient,HttpHandler,FormBuilder],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});