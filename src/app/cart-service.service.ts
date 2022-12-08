import { Injectable } from '@angular/core';
import { CartServiceContract } from './cart-service.contract.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements CartServiceContract {
  cartCount: number = 0;
  cart: any[] = [];

  constructor() {
    console.log('Cart Service constructed');
   }

  addToCart(product: any) {
    this.cart.push(product);

    this.addCartToDb(this.cart);
    this.cartCount = this.cart.length;

  }


  private addCartToDb(cart: any[]) {

  }

}
