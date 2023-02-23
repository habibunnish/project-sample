import { Router } from '@angular/router';
import { GetProductComponent } from './get-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AdminService } from 'src/app/services/guards/admin.service';
import { AdminGuard } from 'src/app/services/guards/admin.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';


describe('GetProductComponent ', () => {
  let component:GetProductComponent   ;
  let fixture: ComponentFixture<GetProductComponent   >;
  let adminService:jasmine.SpyObj<AdminService>;
  let productList:any[];
  let router:Router;
  let fakeid:any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductComponent   ],
      imports:[HttpClientTestingModule],
      providers:[HttpClient,HttpHandler,AdminService,{provide:Router}],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductComponent   );
    component = fixture.componentInstance;
    let fakeid=213;
    router=jasmine.createSpyObj('Router',['navigate']);
    fixture.detectChanges();
  });

  beforeEach(()=>{
    adminService=jasmine.createSpyObj('AdminService',['getProduct']);
    productList=[{
      id: 1,
      tittle: "HOTEL PERAL",
      area: "MUGHALPUR",
      price: "1400",
      image: "chennai7.jpg",
      location: "Chennai"
    }];
    component=new GetProductComponent(adminService,router);

  })
  it('should det productlist when getproduct()',()=>{
    adminService.getProduct.and.returnValue(of(productList));
    component.getallproduct();
    expect(adminService.getProduct).toHaveBeenCalled();
    expect(component.ProductList).toEqual(productList);
  })

 it('should handele error id return error',()=>{
  adminService.getProduct.and.returnValue(throwError('Error'));
  component.getallproduct();
  expect(adminService.getProduct).toHaveBeenCalled();
    expect(component.ProductList).toEqual([]);
 
 });
it('should navigate to crct url when id called',()=>{
  component.edit(fakeid);
  const url=`add-new-data/${fakeid}`
  expect(router.navigate).toHaveBeenCalledWith([url]);
});



  it('should call alert', () => {
    spyOn(window,'alert');
    expect(window.alert).toHaveBeenCalled();
    // expect(component).toBeTruthy();
   });
});