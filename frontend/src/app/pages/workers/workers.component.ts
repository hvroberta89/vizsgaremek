import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './../../service/config.service';
import { WorkerService } from '../../service/worker.service';
import { Worker } from '../../model/worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  tableTitle: string = 'Munkavállalók';

  tableColumn = this.configService.workersTableColumns;

  list$ : Observable<Worker[]> = this.workerService.getAll();

  constructor(
    private configService: ConfigService,
    private workerService: WorkerService,
  ) { }

  ngOnInit(): void {
  }

}
