import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';
import { UnderConstructionComponent } from './@components/under-construction/under-construction.component';
import { CodeSnapsComponent } from './code-snaps/code-snaps.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MyResumeComponent,
    MyPortfolioComponent,
    ContactMeComponent,
    BlogComponent,
    UnderConstructionComponent,
    CodeSnapsComponent,
    LibrariesComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
