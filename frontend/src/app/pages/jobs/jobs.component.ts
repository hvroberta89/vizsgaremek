import { Job } from './../../model/job';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/service/config.service';
import { JobService } from 'app/service/job.service';
import { Observable } from 'rxjs';

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
  ) { }

  ngOnInit(): void {
  }

}
