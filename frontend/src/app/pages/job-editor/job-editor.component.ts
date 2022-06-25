import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { Job } from './../../model/job';
import { JobService } from 'app/service/job.service';
import { Category } from 'app/model/category';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-job-editor',
  templateUrl: './job-editor.component.html',
  styleUrls: ['./job-editor.component.scss']
})
export class JobEditorComponent implements OnInit {

  job$: Observable<Job>;
  category$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private jobService: JobService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.job$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new Job());
        return this.jobService.getOne(params['id'])
      })
    );
  }

  onSave(job: Job): void {
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
};
