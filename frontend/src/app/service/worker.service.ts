
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../model/worker';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerService extends BaseService<Worker> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'workers';
  }
}
