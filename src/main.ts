import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var imagepath = "./assets/Images/Business__28148_29.ico"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// BUILD COMMAND:

// ng build --output-path docs --base-href /Portfolio/