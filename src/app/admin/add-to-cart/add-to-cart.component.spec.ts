import { AddToCartComponent } from './add-to-cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('AddToCartComponent ', () => {
  let component:AddToCartComponent  ;
  let fixture: ComponentFixture<AddToCartComponent  >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCartComponent  ],
      providers:[HttpClient,HttpHandler],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent  );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});