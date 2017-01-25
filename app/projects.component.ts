import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  moduleId: module.id,
  selector: 'my-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  addingProject = false;
  error: any;

  constructor(
    private router: Router,
    private projectService: ProjectService) { }

  getProjects(): void {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects)
      .catch(error => this.error = error);
  }

  addProject(): void {
    this.addingProject = true;
    this.selectedProject = null;
  }

  close(savedProject: Project): void {
    this.addingProject = false;
    if (savedProject) { this.getProjects(); }
  }

  deleteProject(project: Project, event: any): void {
    event.stopPropagation();
    this.projectService
      .delete(project)
      .then(res => {
        this.projects = this.projects.filter(h => h !== project);
        if (this.selectedProject === project) { this.selectedProject = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.addingProject = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProject.id]);
  }
}
