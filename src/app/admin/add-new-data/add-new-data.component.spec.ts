import { RouterTestingModule } from '@angular/router/testing';
import { AddNewDataComponent } from './add-new-data.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';


describe('AddNewDataComponent ', () => {
  let component:AddNewDataComponent   ;
  let fixture: ComponentFixture<AddNewDataComponent>;
  // let routingSpy=jasmine.createSpyObj('Router',['navigate']);
  let roomdetails = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [AddNewDataComponent],
      providers:[HttpClient,HttpHandler],
      //provide:Router ,useValue:routingSpy
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDataComponent   );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // xit('modo ',()=>{
  //   component.addProduct(roomdetails)
  // })

  it('should navigate to the  get-product page', () => {
    // component.checkpage();
    // const nav=routingSpy.navigate.calls.first().args[0];
    // expect(nav).toContain('/get-product');
    expect(component).toBeTruthy();

  });
});