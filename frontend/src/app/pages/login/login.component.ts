import { ILoginData } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: ILoginData = {};
  //user: User = new User();

  constructor(
    private userService: UserService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.auth.login(this.loginData);

    // this.auth.login(this.user).subscribe(
    //   user => {
    //     if (user) {
    //       this.router.navigate(['/']);
    //     }
    //   }
    // );
  }

  // setPassword(): void {
  //   this.userService.update({_id: 'fasfdasfasdffff541515', password: 'test'})
  //     .subscribe( resp => console.log(resp) );
  // }


}
