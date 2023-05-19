import { Component, SecurityContext } from '@angular/core';
import { CartService } from '../cart.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  creditCard = false;
  iframeUrl;

  constructor(
    private cartService: CartService,
    private domSanitizer: DomSanitizer
  ) {}

  loadPayPalButton() {
    this.cartService.loadPayPalPayment().subscribe((data) => {
      console.log(data);
      this.iframeUrl = data['externalPaymentUrl'];
      this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.iframeUrl
      );
      //this.domSanitizer.sanitize(SecurityContext.URL, url);
      this.creditCard = true;
    });
  }

  loadCredicarForm() {
    this.cartService.loadCreditCardPayment().subscribe((data) => {
      console.log(data);
      this.iframeUrl = data['externalPaymentUrl'];
      this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.iframeUrl
      );
      //this.domSanitizer.sanitize(SecurityContext.URL, url);
      this.creditCard = true;
    });
  }
}
