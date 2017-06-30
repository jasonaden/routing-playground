import {Component} from '@angular/core';

@Component({
  selector: 'Child2Grandchild1',
  template: `
    <h1>Child 2, Grandchild 1</h1>
    <a routerLink="../">Child 2</a>
  `
})
export class Child2Grandchild1Cmp {
}