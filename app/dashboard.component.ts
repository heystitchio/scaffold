import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Project} from './project';
import {Category} from './categories';
import {ProjectService} from './project.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private router: Router,
    private projectService: ProjectService) { 
}

  ngOnInit(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
  }

  gotoProject(project: Project): void {
    let link = ['/project', project.id];
    this.router.navigate(link);
  }
}
