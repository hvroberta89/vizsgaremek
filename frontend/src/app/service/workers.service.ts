import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from '../model/worker';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkersService extends BaseService<Worker> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'worker';
  }
}
