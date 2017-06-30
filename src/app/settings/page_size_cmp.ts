import {Component} from '@angular/core';
import {Repository} from '../messages/repository'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-settings',
  template: `
    <h1>Page Size Settings</h1>

    <div *ngFor="let p of repository.folders">
      Page size for '{{p}}' <input [(ngModel)]="repository.pageSize[p]"> (<a [routerLink]="['/messages', p]">open</a>)
    </div>

    <a routerLink="../">Back</a>
  `
})
export class PageSizeCmp {
  constructor(public repository: Repository, public route: ActivatedRoute) {
    console.log(route.snapshot.data);
  }
}