import { RouterTestingModule } from '@angular/router/testing';
import { AddToCartComponent } from './add-to-cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';



describe('AddToCartComponent ', () => {
  let componentInstance:AddToCartComponent  ;
  let fixture: ComponentFixture<AddToCartComponent>;
  let  CartService: any;

  beforeEach(() => {
    // let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      declarations: [AddToCartComponent  ],
      providers:[{provide:HttpClient},HttpHandler],
      imports:[RouterTestingModule]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent  );
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();

  });
  
  it(' should  gotobooking when its clicked',()=>{
    fixture.detectChanges();
    const gotobooking=spyOn(componentInstance,'gotobooking');
    fixture.nativeElement.querySelector('#booking').click();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(gotobooking).toHaveBeenCalled();
    })
   
  });
  it('should go back when get clicked',()=>{
    fixture.detectChanges();
    const goBack=spyOn(componentInstance,'goback');
    fixture.nativeElement.querySelector('#goback').click();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(goBack).toHaveBeenCalled();
    })
    
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });
});