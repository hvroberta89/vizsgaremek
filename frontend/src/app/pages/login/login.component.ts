import { Component, OnInit } from '@angular/core';

import { ILoginData } from './../../service/auth.service';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: ILoginData = {};
  loginError$= this.auth.loginError$
  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.auth.login(this.loginData);
  }

  onFocus():void{
    this.auth.loginError$.next(false)
  }
}
