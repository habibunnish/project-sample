import { CartService } from 'src/app/services/guards/cart.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './../../services/guards/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Location1Component } from './location1.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


describe('Location1Component ', () => {
  let component: Location1Component ;
  let fixture: ComponentFixture<Location1Component >;
  let adminService:AdminService;
 let activatedRoute:ActivatedRoute;
 let adminServices:jasmine.SpyObj<AdminService>;
 let httptestingController:HttpTestingController;
    let cartService:CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [Location1Component],
      providers:[HttpClient,HttpHandler,RouterTestingModule,{provide:AdminService,useValue:jasmine.createSpyObj('AdminService',['getProduct'])},{provide:ActivatedRoute, useValue:{snapshot:{params:{state:'Chennai'}}}}],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents()
  });
  beforeEach(async()=>{
    fixture = TestBed.createComponent(Location1Component);
    component = fixture.componentInstance;
    component=TestBed.inject(Location1Component);
    adminService=TestBed.inject(AdminService);
    activatedRoute=TestBed.inject(ActivatedRoute);
    cartService=TestBed.inject(CartService);
    httptestingController=TestBed.inject(HttpTestingController);

    // spyOn(adminService, 'getProduct').and.returnValue(of([
    //   { id: 1, location: 'test' },
    //   { id: 2, location: 'other' },
    //   { id: 3, location: 'test' }
    // ]));
   
  });

  // afterEach(()=>{
  //   httptestingController.verify();
  // });

  it('should filter',()=>{
    const mockBokkinhlist=[
      { 
      id: 39,
      tittle: "zidan saorvar hotel",
      area: "central",
      price: "3000",
      image: "chennai6.jpg",
      email: "habi@1234",
      location: "Chennai"
      }
  ]
  spyOn(adminService, 'getProduct').and.returnValue(of(mockBokkinhlist));
  component.state='Chennai';
  component.noDuplication();
  expect(component.bookingList).toEqual(mockBokkinhlist);
 
});

  // it('should initaialize component',()=>{
  //   spyOn(component,'noDuplication');
  //   component.ngOnInit();
  //   expect(component.state).toBe('test');
  //   expect(component.noDuplication).toHaveBeenCalled();
  // });



  // it('should filter booking list by state', () => {
  //   component.state = 'test';
  //   component.noDuplication();
  //   expect(component.duplicateLocationList).toEqual([
  //     { id: 1, location: 'test' },
  //     { id: 3, location: 'test' }
  //   ]);
  //   expect(component.bookingList).toEqual(component.duplicateLocationList);
  // });

  // it('set state property',()=>{
  //   const product=[{id:1,location:'ca'},{id:2,location:'ab'}];
  //   adminServices.getProduct.and.returnValue(of(product));
  //   spyOn(component,'noDuplication').and.callThrough();
  //   fixture.detectChanges();
  //   expect(component.state).toEqual('ca');
  //   expect(adminService.getProduct).toHaveBeenCalled();
  //   expect(component.noDuplication).toHaveBeenCalled();
  //   expect(component.bookingList).toEqual([
  //     {id:1,location:'ca'}
  //   ]);
    
  // });

  // it('should filter the list by location and set booking list to the filtered list ',()=>{
  //   const products=[{id:1,location:'a'},{id:2,location:'b'}];
  //   spyOn(adminService,'getProduct').and.returnValue(of(products));
  //   component.state='a';
  //   component.noDuplication();
  //   expect(adminService.getProduct).toHaveBeenCalled();
  //   expect(component.bookingList).toEqual([
  //     {id:1,location:'a'},
  //     {id:2,location:'b'}
  //   ]);
  // });
  // it('should not set if doesnot match',()=>{
  //   const products=[{id:1,location:'a'},{id:2,location:'b'}];
  //   spyOn(adminService,'getProduct').and.returnValue(of(products));
  //   component.state='c';
  //   component.noDuplication();
  //   expect(adminService.getProduct).toHaveBeenCalled();
  //   expect(component.bookingList).toEqual([]);
  // })


  it('should add item to cart in database',()=>{
    const item={id:1,name:'product 1',price:10};
    spyOn(console,'log');
    cartService.addingindatabse(item);
    const req=httptestingController.expectOne('http://localhost:3000/addcart');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(item);
    req.flush({status:'success'});
    expect(console.log).toHaveBeenCalledWith({status:'success'});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});