import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  //getProductchennai
  getProducts() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get('http://localhost:3000/productdatachennai', {
      headers: httpHeaders,
    });
  }

  //post
  addProductsDetails(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      'http://localhost:3000/productdatachennai',
      createResource,
      { headers: httpHeaders }
    );
  }
  //put
  putproductchennai(contactId: string, UpdatedBody: any) {
    return this.httpClient.put(
      'http:/localhost:3000/productdatachennai' + contactId,
      UpdatedBody
    );
  }
  //delete
  deleteproductchennai(id: number) {
    return this.httpClient
      .delete('http://localhost:3000/productdatachennai/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //getProduct
  getProductbangluru() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get('http://localhost:3000/productdatabangaluru', {
      headers: httpHeaders,
    });
  }

  //post
  addProductsDetailsbangluru(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      'http://localhost:3000/productdatabangaluru',
      createResource,
      { headers: httpHeaders }
    );
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //royapuram
  getProductroyapuram() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get('http://localhost:3000/royapuram', {
      headers: httpHeaders,
    });
  }

  //post
  addProductsDetailsroyapuram(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      'http://localhost:3000/royapuram',
      createResource,
      { headers: httpHeaders }
    );
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //jammu
  getProductjammu() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get('http://localhost:3000/jammu', {
      headers: httpHeaders,
    });
  }

  //post
  addProductsDetailsjammu(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/jammu', createResource, {
      headers: httpHeaders,
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}