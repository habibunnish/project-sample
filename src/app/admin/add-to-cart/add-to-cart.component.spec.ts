import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AddNewDataComponent } from './../add-new-data/add-new-data.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AddToCartComponent } from './add-to-cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';



describe('AddToCartComponent ', () => {
  let componentInstance:AddToCartComponent  ;
  let fixture: ComponentFixture<AddToCartComponent>;
  let  CartService: any;
  let userbookedService:UserBookedHistoryService;
   let httptestingcontroller:HttpTestingController;

  beforeEach(() => {
    // let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      declarations: [AddToCartComponent  ],
      providers:[{provide:HttpClient},HttpHandler,UserBookedHistoryService],
      imports:[RouterTestingModule,HttpClientTestingModule]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent  );
    componentInstance = fixture.componentInstance;
    userbookedService=TestBed.inject(UserBookedHistoryService);
    httptestingcontroller=TestBed.inject(HttpTestingController);
    const mockitem={id:2,name:'test',email:'',quantity:1};
    localStorage.setItem('userData',JSON.stringify({email:'test@ex.com'}));
    fixture.detectChanges();

  });
  afterEach(()=>{
    httptestingcontroller.verify();
  });

  // it('should send the item data to the server from localstorage',()=>{
  //   const mockres={success:true};
  //   componentInstance.addProduct({id:1,name:'test',quantity:1});
  //   // const req=httptestingcontroller.expectOne('http://localhost:3000');
  //   // expect(req.request.method).toEqual('POST');
  //   // expect(req.request.body.get('name')).toEqual('test');
  //   // expect(req.request.body.get('email')).toEqual('test@example.com');
  //   // expect(req.request.body.get('quantity')).toEqual('1');

  // })

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