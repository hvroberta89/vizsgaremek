import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Category } from './../../model/category';
import { CategoryService } from 'app/service/category.service';
import { ConfigService } from 'app/service/config.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  tableTitle: string = 'Kategóriák';

  tableColumn = this.configService.categoriesTableColumns;

  list$ : Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private configService: ConfigService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreateOne(): void {
    this.router.navigate(['/', 'categories-edit', '0']);
  }

  onSelectOne(category: Category): void {
    this.router.navigate(['/', 'categories-edit', category._id]);
  }

  onDeleteOne(category: Category): void {
    if (confirm('Biztosan törölni szeretnéd ezt a kategóriát?')) {
      this.categoryService.delete(category._id).subscribe({
        next: () => (this.list$ = this.categoryService.getAll()),
        error: (err) => console.error(err),
      });
    }
  }

}
