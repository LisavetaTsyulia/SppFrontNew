import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username = '';
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
    const user: string = JSON.parse(localStorage.getItem('biography'));
    this.username = user['name'];
  }

}
