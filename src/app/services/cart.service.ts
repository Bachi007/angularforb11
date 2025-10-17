import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartitems:product[]=[];

  addtoCart(productobj:any){
    this.cartitems.push(productobj);
  }
  getCartItems(){
    return of(this.cartitems);
  }
  getCartLength(){
    return this.cartitems.length;
  }


}
