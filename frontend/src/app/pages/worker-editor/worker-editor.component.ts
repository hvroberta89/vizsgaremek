import { WorkerService } from './../../service/worker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of, switchMap } from 'rxjs';
import { Worker } from './../../model/worker';
import { CategoryService } from 'app/service/category.service';
import { Category } from 'app/model/category';

@Component({
  selector: 'app-worker-editor',
  templateUrl: './worker-editor.component.html',
  styleUrls: ['./worker-editor.component.scss']
})
export class WorkerEditorComponent implements OnInit {

  worker$: Observable<Worker>;

  category$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private workerService: WorkerService,
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
  }

  onSave(worker: Worker): void {
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
