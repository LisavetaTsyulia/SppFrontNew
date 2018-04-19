import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from '../../environments/environment';
import {AuthConfigConsts, AuthHttp} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  login(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}auth/login`,
        JSON.stringify({username, password}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(token => {
        localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, token.token);
      });
  }

  logout() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getMe() {
    return this.authHttp.get(`${environment.serverUrl}auth/me`).map(res => res.json());
  }

  getAll() {
    return this.authHttp.get(`${environment.serverUrl}admin/list-of-users`).map(res => res.json());
  }

  register(username: string, email: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}auth/registration`,
        JSON.stringify({username, email, password}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(token => {
      });
  }

  confirm(email: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}auth/confirm`,
        JSON.stringify({email}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(data => {
      });
  }

  getUserInfo(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));
    return this.authHttp.get(`${environment.serverUrl}user/user-info/${id}`, {headers}).map(res => res.json());
  }

  changeUser(email: string, password: string, biography: string, location: string, salary: string, name: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}user/user-info/save-changes`,
        JSON.stringify({email, password, biography, location, salary, name}),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  public isBlocked(): boolean {
    if (!this.isAnonymous()) {
      return JSON.parse(localStorage.getItem('user'))['status'] === 'BLOCKED';
    }
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  public isAccounter(): boolean {
    const role: string = JSON.parse(localStorage.getItem('user'));
    return role['role'] === 'ROLE_ACCOUNTER';
  }

  public isUser(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_USER';
  }

  public isDriver(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_DRIVER';
  }

  public isCompany(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_COMPANY';
  }

  public hasToken(): boolean {
    const token: string = JSON.parse(localStorage.getItem('token'));
    return token === null;
  }

}
