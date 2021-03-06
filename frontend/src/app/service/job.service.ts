import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Job } from './../model/job';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseService<Job> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'jobs';
  }
}
