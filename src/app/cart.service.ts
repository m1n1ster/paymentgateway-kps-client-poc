import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = [];
  paypalPaymentURL: string;
  creditCardPaymentURL: string;
  responseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.creditCardPaymentURL =
      'http://localhost:8090/orchestrator/create/payment/creditcard';
    this.paypalPaymentURL =
      'http://localhost:8090/orchestrator/create/payment/paypal';
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

  public loadPayPalPayment() {
    return this.httpClient.get(this.paypalPaymentURL);
  }

  public loadCreditCardPayment() {
    return this.httpClient.get(this.creditCardPaymentURL);
  }
}
