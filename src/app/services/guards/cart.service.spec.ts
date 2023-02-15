import { CartService } from 'src/app/services/guards/cart.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe(' CartService ', () => {
  let service:  CartService ;
  let httpsTestingController:HttpTestingController;
  let cartService:CartService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let CARTDATA:any=[
    {
      "id": 38,
      "tittle": "Radha hometel sarovar hotel",
      "area": "tamabaram road",
      "price": "3600",
      "image": "chennai2.jpg",
      "email": "",
      "location": "Chennai"
    }
  ];
 
  beforeEach(() => {
    let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
       providers:[{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
      
    });
    httpsTestingController=TestBed.inject(HttpTestingController);
    cartService=TestBed.inject(CartService);
    httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject( CartService );
  });

  it('#post #postaddcartDetailsOfAllLocation() ',(done:DoneFn)=>{
    // httpClientSpy.post;
    cartService.postaddcartDetailsOfAllLocation(CARTDATA).subscribe({
        next:(posts)=>{
            expect(posts).toEqual(CARTDATA);
            done();
        },
        error:()=>{
            done.fail
        },
    });
    const req=httpsTestingController.expectOne('http://localhost:3000/');
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(CARTDATA);
    expect(httpClientSpy.post).toHaveBeenCalled();
});
it('# deleteAllCartLocation() should return expected value',(done:DoneFn)=>{
  httpClientSpy.delete.and.returnValue(of(CARTDATA));
  cartService.deleteAllCartLocation(CARTDATA).subscribe({
      next:(posts)=>{
          expect(posts).toEqual(CARTDATA);
          done();
      },
      error:()=>{
          done.fail
      },
  });
  expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
});


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});