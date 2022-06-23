import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/service/config.service';
import { UserService } from 'app/service/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreateOne(): void {
    this.router.navigate(['/', 'users-edit', '0']);
  }

  onSelectOne(user: User): void {
    this.router.navigate(['/', 'users-edit', user._id]);
  }

  onDeleteOne(user: User): void {
    if (confirm('Biztosan törölni szeretnéd ezt a felhasználót?')) {
      this.userService.delete(user._id).subscribe({
        next: () => (this.list$ = this.userService.getAll()),
        error: (err) => console.error(err),
      });
    }
  }

}
