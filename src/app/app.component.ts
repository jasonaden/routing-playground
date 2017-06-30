import { Component } from '@angular/core';

@Component({
  selector: 'rp-root',
  template: `
    <router-outlet></router-outlet>
    <div class="ng-view"></div>
  `,
})
export class AppComponent {}