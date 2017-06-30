import {Component} from '@angular/core';

@Component({
  selector: 'Parent',
  template: `
    <h1>Parent</h1>
    <a routerLink="child1">Child 1</a><br>
    <a routerLink="child2">Child 2</a><br>
    <a routerLink="../">Back</a>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class ParentCmp {
}