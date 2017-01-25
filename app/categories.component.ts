import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './categories';
import { CategoryService } from './category.service';

@Component({
  moduleId: module.id,
  selector: 'categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  error: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService) { }

  getCategories(): void {
    this.categoryService
      .getCategories()
      .then(categories => this.categories = categories)
      .catch(error => this.error = error);
  }


  ngOnInit(): void {
    this.getCategories();
  }
}
