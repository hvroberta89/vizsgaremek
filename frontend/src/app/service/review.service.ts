import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Review } from './../model/review';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseService<Review> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'reviews';
  }
}
