import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-driver-panel',
  templateUrl: './driver-panel.component.html',
  styleUrls: ['./driver-panel.component.css']
})
export class DriverPanelComponent implements OnInit {

  http = null;
  format = 'PDF';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  printListOfOrders() {
    const url = 'http://localhost:4321/document/printListOfOrders/' + this.format;
    window.open(url);
  }
}
