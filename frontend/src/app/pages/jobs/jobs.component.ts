import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from 'app/service/config.service';
import { Job } from './../../model/job';
import { JobService } from 'app/service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  tableTitle: string = 'Munkalehetőségek';

  tableColumn = this.configService.jobsTableColumns;

  list$ : Observable<Job[]> = this.jobService.getAll();

  constructor(
    private configService: ConfigService,
    private jobService: JobService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(job: Job): void {
    console.log(job._id);
    this.router.navigate(['/', 'jobs-edit', job._id]);
  }

  onDeleteOne(job: Job): void {
    if (confirm('Biztosan törölni szeretnéd ezt a munkát?')) {
      this.jobService.delete(job._id).subscribe({
        next: () => (this.list$ = this.jobService.getAll()),
        error: (err) => console.error(err),
      });
    }
  }

}
