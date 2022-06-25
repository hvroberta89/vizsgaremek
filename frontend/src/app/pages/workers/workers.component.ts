import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './../../service/config.service';
import { WorkerService } from '../../service/worker.service';
import { Worker } from '../../model/worker';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreateOne(): void {
    this.router.navigate(['/', 'workers-edit', '0']);
  }

  onSelectOne(worker: Worker): void {
    console.log(worker._id);
    this.router.navigate(['/', 'workers-edit', worker._id]);
  }

  onDeleteOne(worker: Worker): void {
    if (confirm('Biztosan törölni szeretnéd ezt a munkát?')) {
      this.workerService.delete(worker._id).subscribe({
        next: () => (this.list$ = this.workerService.getAll()),
        error: (err) => console.error(err),
      });
    }
  }

}
