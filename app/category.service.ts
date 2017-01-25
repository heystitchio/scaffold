import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './categories';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'app/category-list';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http
      .get(this.categoriesUrl)
      .toPromise()
      .then(response => response.json().data as Category[])
      .catch(this.handleError);
  }


  getCategory(id: number): Promise<Category> {
    return this.getCategories()
      .then(categories => categories.find(category => category.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
