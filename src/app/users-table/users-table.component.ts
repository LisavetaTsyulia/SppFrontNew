import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ServerDataSource} from 'ng2-smart-table';
import {Http} from '@angular/http';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  http = null;
  settings = {
    add: {
      confirmCreate: true
    },
    delete : {
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
      fullname: {
        title: 'Fullname',
      },
      email: {
        title: 'Email',
      },
      status: {
        title: 'Status',
        type: 'text'
      },
      role: {
        title: 'Role'
      },
      salary: {
        title: 'Salary',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.http = http;
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:4321/getAllDataFromUsers' });
  }

  onConfirmCreate(event) {
    const data = {'id' : event.newData.id,
      'fullname' : event.newData.fullname,
      'email' : event.newData.email,
      'role' : event.newData.role,
      'status' : event.newData.status,
      'salary' : event.newData.salary
    };
    this.http.post('http://localhost:4321/addNewUser', data).subscribe(
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
    const data = {'id' : event.newData.id,
      'fullname' : event.newData.fullname,
      'email' : event.newData.email,
      'role' : event.newData.role,
      'status' : event.newData.status,
      'salary' : event.newData.salary
    };
    this.http.put('http://localhost:4321/updateUser', data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
        this.source.refresh();
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
    this.http.delete('http://localhost:4321/deleteUser/' + event.data.id).subscribe(
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

