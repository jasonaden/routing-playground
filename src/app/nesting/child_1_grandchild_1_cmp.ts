import {Component} from '@angular/core';

@Component({
  selector: 'Child1Grandchild1',
  template: `
    <h1>Child 1, Grandchild 1</h1>
    <a routerLink="../">Child 1</a>
  `
})
export class Child1Grandchild1Cmp {
}