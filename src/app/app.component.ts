import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {
    /*if (window.addEventListener) {
      window.addEventListener('message', this.goHome.bind(this), false);
    } else {
      (<any>window).attachEvent('onmessage', this.goHome.bind(this));
    }*/
  }

  @HostListener('window:message', ['$event'])
  goHome($event: MessageEvent) {
    if ($event.data['payment'] == 'SUCCESS') {
      alert('Pagamento effettuato con successo');
      this.router.navigate(['/']);
    } else if ($event.data['payment'] == 'FAILURE') {
      alert('Errore nella procedura di pagamento');
      this.router.navigate(['/']);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
