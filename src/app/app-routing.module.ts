import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'projects', component: ProjectsComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: '', pathMatch: 'full', component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
