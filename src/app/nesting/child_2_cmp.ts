import {Component} from '@angular/core';

@Component({
  selector: 'Child2',
  template: `
    <h1>Child 2</h1>
    <a routerLink="grandchild1">Grandchild 1</a><br>
    <a routerLink="grandchild2">Grandchild 2</a><br>
    <a routerLink="../">Parent</a>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class Child2Cmp {
}