import { Injectable } from '@angular/core';
import { Consumable } from './menu/consumable.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Consumable[];
  constructor() {
    this.cart = [];
   }

  addToCart(item) {
    this.cart.push(item);
  }

  getCartList() {
    return this.cart;
  }

  deleteFromCart(item) {
    this.cart = this.cart.filter(element => {
      return item.id != element.id;
    });
  }

  clearCart() {
    this.cart = [];
  }
}
