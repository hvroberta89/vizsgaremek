import { Job } from './../model/job';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseService<Job> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'jobs';
  }
}
