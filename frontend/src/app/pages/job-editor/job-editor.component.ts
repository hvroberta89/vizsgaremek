import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Observer, of, switchMap } from 'rxjs';

import { Job } from './../../model/job';
import { JobService } from 'app/service/job.service';
import { Category } from 'app/model/category';
import { CategoryService } from 'app/service/category.service';
import { isBs3 } from 'ngx-bootstrap/utils';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-job-editor',
  templateUrl: './job-editor.component.html',
  styleUrls: ['./job-editor.component.scss']
})
export class JobEditorComponent implements OnInit {

  job$: Observable<Job>;

  isBs3 = isBs3();
  search?: string;

  selectedEditorUser: User | null = null;
  selectedWorkerUser: User | null = null;

  users$:  Observable<User[]> = this.userService.getAll();
  suggestions$: Observable<User[]> = of([]);

  selectedCategory: Category | null = null;
  category$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private jobService: JobService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.job$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new Job());
        return this.jobService.getOne(params['id'])
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

  selectEditorUser(ev: {item: User}): void {
    this.selectedEditorUser = ev.item;
  }
  selectWorkerUser(ev: {item: User}): void {
    this.selectedWorkerUser  = ev.item;
  }

  onSave(job: Job): void {
    if (this.selectedCategory){
      job.category = this.selectedCategory;
    }

    if (this.selectedEditorUser) {
      job.editor_user = this.selectedEditorUser?._id;
    }

    if (this.selectedWorkerUser) {
      job.worker_user = this.selectedWorkerUser?._id;
    }

    if (!job._id){
      job._id = undefined;
      this.jobService.create(job).subscribe({
        next: () => this.location.back(),
        error: err => console.error(err),
      });
    } else {
      this.jobService.update(job).subscribe({
        next: () => this.location.back(),
      });
    }
  };

  onCancel(): void {
    history.back()
  };
};
