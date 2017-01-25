import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ProjectService } from './project.service';
import { CategoryService } from './category.service';
import { ProjectSearchComponent } from './project-search.component';
import { CatPipe } from './project-category.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    ProjectSearchComponent,
    routedComponents,
	  CatPipe
  ],
  providers: [
    ProjectService, CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
