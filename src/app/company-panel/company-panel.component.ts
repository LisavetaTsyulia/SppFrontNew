import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-company-panel',
  templateUrl: './company-panel.component.html',
  styleUrls: ['./company-panel.component.css']
})
export class CompanyPanelComponent implements OnInit {

  http = null;
  format = 'PDF';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  printListOfStorages() {
    const url = 'http://localhost:4321/document/printListOfStorages/' + this.format;
    window.open(url);
  }

  printListOfItems() {
    const url = 'http://localhost:4321/document/printListOfItems/' + this.format;
    window.open(url);
  }
}
