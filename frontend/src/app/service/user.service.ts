import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(public override http:HttpClient) {
    super(http);
    this.entityName = 'users';
  }
}
