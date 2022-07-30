import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { CoursesComponent } from './courses/courses.component'
import { ServicesComponent } from './services/services.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
  path:'home',
  component: HomeComponent
},
{
  path:'aboutus',
  component: AboutUsComponent
},
{
  path:'courses',
  component:CoursesComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'contact',
  component:ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
