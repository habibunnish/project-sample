import { RouterTestingModule } from '@angular/router/testing';
import { AddNewDataComponent } from './add-new-data.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AddNewDataComponent ', () => {
  let component:AddNewDataComponent   ;
  let fixture: ComponentFixture<AddNewDataComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [AddNewDataComponent],
      providers:[HttpClient,HttpHandler],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDataComponent   );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});