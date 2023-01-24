import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {}
  //getter
  getProducts() {
    return this.productList.asObservable();
  }

  addtoCarts(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);
  }

  // removecartItem(items: any) {
  //   this.cartItemList.map((a: any, index: any) => {
  //     if (items.id === a.id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   });
  //   this.productList.next(this.cartItemList);
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //new bangaluru
  getProductbangluru() {
    return this.productList.asObservable();
  }

  addtoCartbangaluru(item: any) {
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
  }
 
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //royapuram
  // getProductroyapuram() {
  //   return this.productList.asObservable();
  // }

  addtoCartroyapuram(item: any) {
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
  }
 


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getProductjammu() {
    return this.productList.asObservable();
  }

  addtoCartsjammu(item: any) {
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //userBookinginstoring
  getProductbangalurubookedpage() {
    return this.productList.asObservable();
  }

  addtoCartbangalurubookedpage(item: any) {
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
  }
/////////////////////////////////////////////////////////////////////////////////////////////
  getaddcartDetailsOfAllLocation(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get('http://localhost:3000/cartstoreddatas',{
      headers: httpHeaders,
    });
    
  }
  postaddcartDetailsOfAllLocation(createResource:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/cartstoreddatas', createResource,{
      headers: httpHeaders,
    });
  }
  deleteAllCartLocation(id: number) {
    return this.httpClient.delete('http://localhost:3000/cartstoreddatas/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

}
