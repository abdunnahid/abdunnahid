import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  showSignature();
  window.console.log = () => { }; // Removes console logs in production
  window.console.warn = () => { }; // Removes console logs in production
  enableProdMode();
}


function showSignature(): void {
  console.log('                                                                                                                                         ');
  console.log('   ad@@PPP@@ba                @@                    @@                                                     @@           @@           @@  ');
  console.log(' d@    ama a  @a              @@                    @@                                                     @@                        @@  ');
  console.log('d@    @P @@   @@              @@                    @@                                                     @@                        @@  ');
  console.log('@@   @P  @P   @@   adPPYYba   @@ dPPYba      adPPYb @@  @@       @@  @b dPPYba    @b dPPYba     adPPYYba   @@ dPPYba    @@    adPPYb @@  ');
  console.log('@@  @@   @    @P          Y@  @@P      @a  a@      Y@@  @@       @@  @@P      @a  @@P      @a          Y@  @@P      @a  @@  a@      Y@@  ');
  console.log('@@  @B  d@  ad@    adPPPPP@@  @@       d@  @b       @@  @@       @@  @@       @@  @@       @@   adPPPPP@@  @@       @@  @@  @b       @@  ');
  console.log(' @a  @@P @@@P     @@      @@  @@b     a@    @a     d@@   @a     a@@  @@       @@  @@       @@  @@      @@  @@       @@  @@   @a     d@@  ');
  console.log('  Y@aaaaaaaad@P     @bbdP Y@  @Y Ybbd@        @bbdP Y@     YbbdP Y@  @@       @@  @@       @@    @bbdP Y@  @@       @@  @@     @bbdP Y@  ');
  console.log('                                                                                                                                         ');
  console.log('                                                                                                                                         ');
  console.log('Hey there! Interested in the code behind my portfolio?');
  console.log('Find me on in instagram, twitter, github, linkedIn: @abdunnahid');
  console.log('Come say hi, tell me what you\'re debugging.');
  console.log('Yeah, Don\'t try to mess with other people\'s code. Build your own!');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
