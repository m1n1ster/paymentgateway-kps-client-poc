import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(private cartService: CartService) {}

  share() {
    window.alert('The product has been shared!');
  }

  buy() {
    window.alert('Comprato!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }
}
