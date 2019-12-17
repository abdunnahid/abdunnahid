import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
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
    path: 'contact',
    component: ContactMeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
