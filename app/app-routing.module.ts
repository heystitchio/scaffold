import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './projects.component';
import { CategoriesComponent } from './categories.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'category-list',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, ProjectsComponent, ProjectDetailComponent, CategoriesComponent];
