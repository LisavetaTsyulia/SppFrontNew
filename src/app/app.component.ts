import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';

  constructor(private http: Http) {
  }

  private sayHello(): void {
    this.result = 'loading...';
    this.http.get(`${environment.serverUrl}hello`).subscribe(response => this.result = response.text());
  }
}
