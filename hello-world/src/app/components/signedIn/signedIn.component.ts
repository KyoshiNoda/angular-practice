import { Component } from '@angular/core';
@Component({
  selector: 'signedIn',
  templateUrl: './signedIn.component.html',
  styleUrls: ['./signedIn.component.css'],
})
export class SignedInComponent {
  isLoggedOn: boolean = false;
  loginHandler = () => {
    this.isLoggedOn = !this.isLoggedOn;
  };
}
