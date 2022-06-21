import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { Job } from './../../model/job';
import { JobService } from 'app/service/job.service';

@Component({
  selector: 'app-job-editor',
  templateUrl: './job-editor.component.html',
  styleUrls: ['./job-editor.component.scss']
})
export class JobEditorComponent implements OnInit {

  job$!: Observable<Job>;
  categories: string[] = [
    "kert",
    "takarítás",
    "gyerekfelügyelet",
    "egyéb"
  ];

  constructor(
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.job$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === 'new') return of(new Job());
        return this.jobService.getOne(params['id'])
      })
    );
  }

  update(job: Job): void {
    this.jobService.update(job).subscribe({
      next: updatedJob => this.router.navigate(['/', 'jobs']),
      error: err => console.error(err),
    });
  }

  onCreate(job: Job) {
    this.jobService
      .create(job)
      .subscribe((job) => this.router.navigate(['/', 'jobs']));
  }

}