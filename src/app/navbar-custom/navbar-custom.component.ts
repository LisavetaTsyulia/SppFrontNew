import { Component, OnInit } from '@angular/core';
import {AuthConfigConsts} from 'angular2-jwt';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css']
})
export class NavbarCustomComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public deleteCookies() {
    localStorage.removeItem('user');
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
  }
}
