import { response } from 'express';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAuthModel {
  success: boolean;
  accessToken: string;
  user: User;
}

export interface ILoginData {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;
  loginUrl: string = '';

  user$ : BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  loginError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginUrl = `${this.apiUrl}login`;

    const loginInfo = sessionStorage.getItem('login');
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.access_token$.next(loginObject.accessToken);
      this.user$.next(loginObject.user);
    }

    this.user$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/', 'login']);
          this.access_token$.next('');
          sessionStorage.removeItem('login');
        }
      }
    });

  }

  get currentUser(): User | null {
    return this.user$.value
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));
      },
      error: () => this.loginError$.next(true)
    });
  }

  logout(): void{
    this.user$.next(null);
  }
}
