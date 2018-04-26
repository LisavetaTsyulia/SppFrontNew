import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-accounter-panel',
  templateUrl: './accounter-panel.component.html',
  styleUrls: ['./accounter-panel.component.css']
})
export class AccounterPanelComponent implements OnInit {

  http = null;
  format = 'PDF';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  printListOfUsers() {
    this.http.post('http://localhost:4321/documents/printListOfUsers/' + this.format).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  printListOfItems() {
    this.http.post('http://localhost:4321/documents/printListOfItems/' + this.format).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  printTaxes() {
    this.http.post('http://localhost:4321/documents/printTaxes/' + this.format).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  printDriversSchedule() {
    this.http.post('http://localhost:4321/documents/printDriversSchedule/' + this.format).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  printListOfProviders() {
    this.http.post('http://localhost:4321/documents/printListOfProviders/' + this.format).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }
}
