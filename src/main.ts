import 'angular';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {setUpLocationSync} from '@angular/router/upgrade';

import { AppModule } from './app/app.module';
import { Ng1AppModule } from './app/appng1.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  // bootstrap AngularJS
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  setUpLocationSync(upgrade);
});
