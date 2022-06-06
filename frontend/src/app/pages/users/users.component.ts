import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/service/config.service';
import { UserService } from 'app/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableTitle: string = 'Felhasználók';

  tableColumn = this.configService.usersTableColumns;

  list$ : Observable<User[]> = this.userService.getAll();

  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}
