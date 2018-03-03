import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
    :host {
      /* padding-top: 32px; */
    }
  `
  ]
})
export class AppComponent {}
