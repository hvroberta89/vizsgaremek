import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'app/model/category';
import { CategoryService } from 'app/service/category.service';
import { Observable, of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit {

  category$: Observable<Category>;

  sure: boolean = false

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.category$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new Category());
        return this.categoryService.getOne(params['id'])
      })
    );
  }

  onSave(category: Category): void {
    if (!category._id){
      category._id = undefined;
      this.categoryService.create(category).subscribe({
        next: (updatedUser) => {
          this.location.back();
        },
        error: err => console.error(err),
      });
    } else {
      this.categoryService.update(category).subscribe({
        next: () => this.location.back(),
      });
    }
  }

  onCancel(): void {
    history.back()
  }


}
