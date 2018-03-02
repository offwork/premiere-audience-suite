import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @HostBinding('class') componentClass;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(public overlayContainer: OverlayContainer) {}

  getErrorMassages() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    const classList = this.overlayContainer.getContainerElement().classList;
    console.log('class list: ', classList);
  }
}
