import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ServerDataSource} from 'ng2-smart-table';
import {Http} from '@angular/http';

@Component({
  selector: 'app-storages-table',
  templateUrl: './storages-table.component.html',
  styleUrls: ['./storages-table.component.css']
})
export class StoragesTableComponent {

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
      address: {
        title: 'Address',
      },
      capacity: {
        title: 'Capacity',
      }
    },
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.http = http;
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:4321/getAllDataFromStorage' });
  }

  onConfirmCreate(event) {
    const data = {'id' : event.newData.id,
      'address' : event.newData.address,
      'capacity' : event.newData.capacity
    };
    this.http.post('http://localhost:4321/addNewStorage', data).subscribe(
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
      'address' : event.newData.address,
      'capacity' : event.newData.capacity
    };
    this.http.put('http://localhost:4321/updateStorage', data).subscribe(
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
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event.data);
      this.http.delete('http://localhost:4321/deleteStorage/' + event.data.id).subscribe(
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
    } else {
      event.confirm.reject();
    }
  }

}
