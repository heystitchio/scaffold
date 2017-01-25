import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ProjectSearchService } from './project-search.service';
import { Project } from './project';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'project-search',
  templateUrl: 'project-search.component.html',
  styleUrls: ['project-search.component.css'],
  providers: [ProjectSearchService]
})
export class ProjectSearchComponent implements OnInit {
  projects: Observable<Project[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private projectSearchService: ProjectSearchService,
    private router: Router) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.projects = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.projectSearchService.search(term)
        // or the observable of empty projects if no search term
        : Observable.of<Project[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Project[]>([]);
      });
  }

  gotoDetail(project: Project): void {
    let link = ['/detail', project.id];
    this.router.navigate(link);
  }
}
