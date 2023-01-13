import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);
  constructor() { }
  //getter
  getProducts(){
   return this.productList.asObservable();
  }
  //setter
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCarts(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(){
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.index){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
