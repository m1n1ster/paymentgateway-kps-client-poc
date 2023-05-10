import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = [];
  createPaymentURL: string;
  responseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.createPaymentURL =
      'http://localhost:8090/orchestrator/create/payment/creditcard';
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  public createPayment() {
    return this.httpClient.get(this.createPaymentURL);
  }
}
