import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';
import { CodeSnapsComponent } from './code-snaps/code-snaps.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'resume',
    component: MyResumeComponent
  },
  {
    path: 'portfolio',
    component: MyPortfolioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'code-snaps',
    component: CodeSnapsComponent
  },
  {
    path: 'libraries',
    component: LibrariesComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
