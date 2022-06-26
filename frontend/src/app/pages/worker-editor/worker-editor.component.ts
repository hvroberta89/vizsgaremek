import { WorkerService } from './../../service/worker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map, Observable, Observer, of, switchMap } from 'rxjs';
import { Worker } from './../../model/worker';
import { CategoryService } from 'app/service/category.service';
import { Category } from 'app/model/category';
import { isBs3 } from 'ngx-bootstrap/utils';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-worker-editor',
  templateUrl: './worker-editor.component.html',
  styleUrls: ['./worker-editor.component.scss']
})
export class WorkerEditorComponent implements OnInit {

  worker$: Observable<Worker>;

  isBs3 = isBs3();
  search?: string;

  selectedEditorUser: User | null = null;

  users$:  Observable<User[]> = this.userService.getAll();
  suggestions$: Observable<User[]> = of([]);

  selectedCategory: Category | null = null;
  category$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private workerService: WorkerService,
    private userService: UserService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.worker$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new Worker());
        return this.workerService.getOne(params['id'])
      })
    );

    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search || '');
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.userService.search(`user_name=${query}`).pipe(
            map((data: User[]) => Array.isArray(data) ? data : []),
          );
        }
        return of([]);
      }),
    );
  }

  changeName(ev: Event): void {
    this.search = ev as unknown as string;
  }

  changeCategory(): void {
    console.log(this.selectedCategory);
  }

  selectEditorUser(ev: {item: User}): void {
    this.selectedEditorUser = ev.item;
  }

  onSave(worker: Worker): void {
    if (this.selectedEditorUser) {
      worker.editor_user = this.selectedEditorUser?._id;
    }

    if (this.selectedCategory){
      worker.category = this.selectedCategory;
    }

    if (!worker._id){
      worker._id = undefined;
      this.workerService.create(worker).subscribe({
        next: () => this.location.back(),
        error: err => console.error(err),
      });
    } else {
      this.workerService.update(worker).subscribe({
        next: () => this.location.back(),
      });
    }
  };

}
