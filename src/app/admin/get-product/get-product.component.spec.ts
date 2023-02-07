import { GetProductComponent } from './get-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('GetProductComponent ', () => {
  let component:GetProductComponent   ;
  let fixture: ComponentFixture<GetProductComponent   >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductComponent   ],
      providers:[HttpClient,HttpHandler],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductComponent   );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});