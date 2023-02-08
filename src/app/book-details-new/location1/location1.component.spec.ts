import { RouterTestingModule } from '@angular/router/testing';
import { Location1Component } from './location1.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('Location1Component ', () => {
  let component: Location1Component ;
  let fixture: ComponentFixture<Location1Component >;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[RouterTestingModule],
      declarations: [ Location1Component ],
      providers:[HttpClient,HttpHandler,RouterTestingModule],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Location1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});