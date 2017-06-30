import {Component} from '@angular/core';

@Component({
  selector: 'Child1Grandchild2',
  template: `
    <h1>Child 1, Grandchild 2</h1>
    <a routerLink="../">Child1</a>
  `
})
export class Child1Grandchild2Cmp {
}