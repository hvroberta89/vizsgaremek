import { Category } from './../model/category';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'categories';
  }
}
