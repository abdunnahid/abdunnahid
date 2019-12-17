![webpack-bundle-analyzer](assets/articles/starting-with-angular-material-v7/starting-with-angular-material-v7.hero.jpg)

## Quick Starter For Angular Material 7

If you are not interested in bla bla bla go directly to the [**repo**](https://github.com/abdunnahid/lazy-angular-material)  

### Structuring the Project

Create the project

```bash
ng new angular-material-lazy --style=scss
```

Create modules

```bash
ng g m auth --routing
ng g m dashboard --routing
```

Create components under **auth** module

```bash
ng g c auth
ng g c auth/login
ng g c auth/registration
ng g c auth/forgotPassword
```
Create components under **dashboard** module

```bash
ng g c dashboard
ng g c dashboard/overview
ng g c dashboard/clients
```
### Install Angular Material

```bash
ng add @angular/material
```

Create Angular Material module
```bash
ng g m angular-material
```

### Overwrite Material CSS in Component SCSS File

Use **_/deep/_** before class name.

```css
/deep/ .registration-page {

    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .registration-card {
        width: 50%;
        min-width: 320px;
        max-width: 500px;
        .mat-card-header-text {
            margin: 0 !important;
        }
    }

    .mat-form-field {
        width: 100%;
    }
    
}
```

### Deployment

#### webpack-bundle-analyzer
```bash
npm i webpack-bundle-analyzer --save-dev
```
**Build the project**
```bash
ng build --prod --stats-json
```
**Add Script to _pachacke.json_**
```bash
"scripts": {
  "stats": "webpack-bundle-analyzer dist/app_name/stats.json",
  ...
},
```
**Run _webpack-bundle-analyzer_**
```bash
npm run stats
```

#### Remove all console.log in Production

**Add the code snipets below to _main.ts_ file**
```typescript
if (environment.production) {
  window.console.log = () => {}; // Removes console logs in production
  enableProdMode();
}
```

#### Add Global Error Handler Service

**Create a service extending ErrorHandler class from _@angular/core_**
```typescript
import { Injectable, ErrorHandler } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService extends ErrorHandler {
  constructor() {
    super();
  }
  public handleError(error: any): void {
    this.logError(error);
    super.handleError(error);
  }
  private logError(error: any) {
    // write what you want to do with the errors
  }
}
```
**Provide _ErrorHandler_ to _AppModule_**
```typescript
import { NgModule, ErrorHandler } from '@angular/core';

providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
]
```

### Useful Tools
**Angular Console:** [angularconsole.com](https://angularconsole.com/)  
**Angular Augury:** [augury.rangle.io](https://augury.rangle.io/)  
**Webpack Bundle Analyzer:** [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)  

### Useful Resources
**Tips and tricks 1:** [itnext.io](https://itnext.io/angular-tips-and-tricks-ec7f548670c1)  
**Tips and tricks 2:** [espeo.eu](https://espeo.eu/blog/30-angular-and-ts-tricks-and-tips-that-will-improve-your-application/)  
**Tips and tricks 3:** [sitepoint.com](https://www.sitepoint.com/10-essential-typescript-tips-tricks-angular/)  
