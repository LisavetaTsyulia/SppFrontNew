import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ServerDataSource} from 'ng2-smart-table';
import {Http} from '@angular/http';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent {
  http = null;
  settings = {
    add: {
      confirmCreate: true
    },
    delete: {
      confirmDelete: true
    },
    edit: {
      confirmSave: true
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      name: {
        title: 'Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.http = http;
    this.source = new ServerDataSource(http, {endPoint: 'http://localhost:4321/getAllDataFromCompanies'});
  }

  onConfirmCreate(event) {
    const data = {
      'id': event.newData.id,
      'email': event.newData.email,
      'name': event.newData.name
    };
    this.http.post('http://localhost:4321/addNewCompany', data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
        this.source.add(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  updateRecord(event) {
    const data = {
      'id': event.newData.id,
      'email': event.newData.email,
      'name': event.newData.name
    };
    this.http.put('http://localhost:4321/updateCompany', data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  deleteRecord(event) {
    console.log(event.data);
    this.http.delete('http://localhost:4321/deleteCompany/' + event.data.id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.data);
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
