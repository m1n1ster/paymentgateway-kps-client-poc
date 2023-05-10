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
  pay = false;
  iframeUrl;

  constructor(
    private cartService: CartService,
    private domSanitizer: DomSanitizer
  ) {}

  goToPay() {
    this.cartService.createPayment().subscribe((data) => {
      console.log(data);
      this.iframeUrl = data['externalPaymentUrl'];
      this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.iframeUrl
      );
      //this.domSanitizer.sanitize(SecurityContext.URL, url);
      this.pay = true;
    });
  }

  changeUrlService(paymentUrl) {
    this.cartService.createPaymentURL = paymentUrl;
  }
}
