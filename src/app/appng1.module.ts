/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import AngularJS
import * as angular from 'angular'
import 'angular-route'

// import app modules
import {MessagesModule} from './messages';
import {MenuModule} from './menu';
import {TabModule} from './settings'

export const Ng1AppModule = angular.module('Ng1AppModule', [
  'ngRoute',
  MessagesModule.name,
  MenuModule.name,
  TabModule.name,
]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});
