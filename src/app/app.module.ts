/**
 * This file defines the root module of the Angular 2 of the application.
 */

// import Angular
import {NgModule, Component} from '@angular/core';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

// import app modules
import {MessagesNgModule} from './messages';
import {MenuNgModule} from './menu';
import {SettingsNgModule} from './settings';
import {NestingNgModule} from './nesting';
import {AppComponent} from './app.component';

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    // Only certain routes are handled by Angular, other are still handled by AngularJS
    const urls = ['/settings', '/tabs', '/nesting'];
    for (let i = 0 ; i < urls.length ; i++)
      if (url.toString().startsWith(urls[i]))
        return true;
    return false;
  }

  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,

    // import all modules
    MenuNgModule,
    MessagesNgModule,
    SettingsNgModule,
    NestingNgModule,

    // We don't need to provide any routes.
    // The router will collect all routes from all the registered modules.
    RouterModule.forRoot([], {enableTracing: true})
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule){}
}