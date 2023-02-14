import { HttpClient, HttpHandler } from "@angular/common/http";
import{HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed,inject } from "@angular/core/testing";
import { BookingService } from "./booking.service";
import{of} from 'rxjs';


describe('service: bookingService',()=>{
    let service: BookingService ;

    let httpClient:HttpClient;
    let httpTestingController:HttpTestingController;
    let httpClientSpy:jasmine.SpyObj<HttpClient>;
    let bookingService:BookingService;
    let POSTS=[
        {
            "id": 1,
            "tittle": "manohar oyo hotel",
            "area": "kaswadi street",
            "price": "3807",
            "image": "bang3.jpg",
            "email": "",
            "location": "Banguluru"
          }
    ]
    beforeEach(()=>{
         service = TestBed.inject( BookingService );
        let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
        TestBed.configureTestingModule({
            providers:[BookingService,{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
            imports:[HttpClientTestingModule]
        });
        httpClient=TestBed.inject(HttpClient);
        httpTestingController=TestBed.inject(HttpTestingController);
        bookingService=TestBed.inject(BookingService);
        httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    
    });
    describe('#getProduct()',()=>{
        it('should return expected value',(done:DoneFn)=>{
            httpClientSpy.get.and.returnValue(of(POSTS));
            bookingService.getProducts().subscribe({
                next:(posts)=>{
                    expect(posts).toEqual(POSTS);
                    done();
                },
                error:()=>{
                    done.fail
                },
            });
            expect(httpClientSpy.get).toHaveBeenCalledTimes(1);;
        })
        it('should',inject([BookingService],(service:BookingService)=>{
            expect(service).toBeTruthy();
        }));
        // it('base url should ',inject([BookingService],(service:BookingService)=>{
        //     expect(service.getProducts).toBe('http://localhost:3000/');
        // }));
        describe('#addProductsDetails()',()=>{
            bookingService.addProductsDetails(POSTS).subscribe(
                data=>expect(data).toEqual(POSTS,'should return this post value reading'),
                fail
            );
            const req=httpTestingController.expectOne('http://localhost:3000/');
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(POSTS);
        });
        it('should  add location and return it',()=>{
            bookingService.addProductsDetailsbangluru(POSTS).subscribe(
                data=>expect(data).toEqual(POSTS,'should return location values'),
                fail
            );
            const req=httpTestingController.expectOne('http://localhost:3000/');
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(POSTS);
        });

    });
    it('should be created', () => {
        expect(service).toBeTruthy();
      });
  
   

})