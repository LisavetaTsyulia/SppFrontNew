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
    const url = 'http://localhost:4321/document/printListOfUsers/' + this.format;
    window.open(url);
  }

  printListOfItems() {
    const url = 'http://localhost:4321/document/printListOfItems/' + this.format;
    window.open(url);
  }

  printTaxes() {
    const url = 'http://localhost:4321/document/printTaxes/' + this.format;
    window.open(url);
  }

  printDriversSchedule() {
    const url = 'http://localhost:4321/document/printDriversSchedule/' + this.format;
    window.open(url);
  }

  printListOfProviders() {
    const url = 'http://localhost:4321/document/printListOfProviders/' + this.format;
    window.open(url);
  }
}
