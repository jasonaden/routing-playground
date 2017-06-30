// This module was fully migrated to Angular
import {NgModule, Injectable, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Resolve, CanActivate, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import {ParentCmp} from './parent_cmp';
import {Child1Cmp} from './child_1_cmp';
import {Child1Grandchild1Cmp} from './child_1_grandchild_1_cmp';
import {Child1Grandchild2Cmp} from './child_1_grandchild_2_cmp';
import {Child2Cmp} from './child_2_cmp';
import {Child2Grandchild1Cmp} from './child_2_grandchild_1_cmp';
import {Child2Grandchild2Cmp} from './child_2_grandchild_2_cmp';

@Injectable()
export class CanActivateGuard implements CanActivate {
  canActivate(route, snapshot) {
    console.warn('CanActivate: ' + route.url.toString());
    return true;
  }
}

@Injectable()
export class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(childRoute, snapshot) {
    console.warn('CanActivateChild: ' + childRoute.url.toString());
    return true;
  }
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(cmp, currentRoute, currentState, nextRoute) {
    console.warn('CanDeactivate: ' + currentRoute.url.toString(), ' to ', nextRoute.url.toString());
    return true;
  }
}

@Injectable()
export class CanLoadGuard implements CanLoad {
  canLoad(route) {
    console.warn('CanLoad: ' + route.url.toString());
    return true;
  }
}

@Injectable()
export class Resolver implements Resolve<string> {
  resolve(route, state) {
    const data = 'Resolving: ' + route.url.toString();
    console.warn(data);
    return data;
  }
}

export function checkActivate() {
  debugger;
  return true;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'nesting', 
        component: ParentCmp, 
        resolve: {data: Resolver},
        canActivate: [CanActivateGuard],
        canActivateChild: [CanActivateChildGuard],
        canDeactivate: [CanDeactivateGuard],
        canLoad: [CanLoadGuard],
        children: [
          { 
            path: 'child1',
            component: Child1Cmp, 
            resolve: {data: Resolver}, 
            canActivate: [CanActivateGuard],
            canActivateChild: [CanActivateChildGuard],
            canDeactivate: [CanDeactivateGuard],
            canLoad: [CanLoadGuard],
            children: [
              { 
                path: 'grandchild1', 
                component: Child1Grandchild1Cmp, 
                resolve: {data: Resolver},
                canActivate: [CanActivateGuard],
                canActivateChild: [CanActivateChildGuard],
                canDeactivate: [CanDeactivateGuard],
                canLoad: [CanLoadGuard]
              },
              { 
                path: 'grandchild2', 
                component: Child1Grandchild2Cmp, 
                resolve: {data: Resolver},
                canActivate: [CanActivateGuard],
                canActivateChild: [CanActivateChildGuard],
                canDeactivate: [CanDeactivateGuard],
                canLoad: [CanLoadGuard]
              }
          ] },
          { 
            path: 'child2', 
            component: Child2Cmp, 
            resolve: {data: Resolver}, 
            canActivate: [CanActivateGuard],
            canActivateChild: [CanActivateChildGuard],
            canDeactivate: [CanDeactivateGuard],
            canLoad: [CanLoadGuard],
            children: [
              { 
                path: 'grandchild1', 
                component: Child2Grandchild1Cmp, 
                resolve: {data: Resolver},
                canActivate: [CanActivateGuard],
                canActivateChild: [CanActivateChildGuard],
                canDeactivate: [CanDeactivateGuard],
                canLoad: [CanLoadGuard]
              },
              { 
                path: 'grandchild2', 
                component: Child2Grandchild2Cmp, 
                resolve: {data: Resolver},
                canActivate: [CanActivateGuard],
                canActivateChild: [CanActivateChildGuard],
                canDeactivate: [CanDeactivateGuard],
                canLoad: [CanLoadGuard]
              }
          ] }
      ]}
    ])
  ],
  declarations: [
    ParentCmp,
    Child1Cmp,
    Child1Grandchild1Cmp,
    Child1Grandchild2Cmp,
    Child2Cmp,
    Child2Grandchild1Cmp,
    Child2Grandchild2Cmp
  ],
  providers: [
    {provide: 'CanActivateSettingsChild', useValue: checkActivate},
    Resolver,
    CanActivateGuard,
    CanActivateChildGuard,
    CanDeactivateGuard,
    CanLoadGuard
  ]

})
export class NestingNgModule {
}
