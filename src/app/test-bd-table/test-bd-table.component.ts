import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {ServerDataSource} from 'ng2-smart-table';
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-test-bd-table',
  templateUrl: './test-bd-table.component.html',
  styleUrls: ['./test-bd-table.component.css']
})
export class TestBdTableComponent {
  http = null;
  settings = {
    add:{
      confirmCreate:true
    },
    delete :{
      confirmDelete: true
    },
    edit:{
      confirmSave:true
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      name: {
        title: 'Name',
      },
      category: {
        title: 'Category',
      },
      expire_date: {
        title: 'Expire date',
        type: 'text'
      },
      price: {
        title: 'Price',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.http = http;
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:4321/getAllDataFromItems' });
  }

  onConfirmCreate(event) {
    let data = {"id" : event.newData.id,
      "category" : event.newData.category,
      "expiryDate" : event.newData.expire_date,
      "price" : event.newData.price,
      "name" : event.newData.name
    };
    this.http.post('http://localhost:4321/addNewItem', data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
        this.source.add(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  updateRecord(event) {
    let data = {"id" : event.newData.id,
      "category" : event.newData.category,
      "expiryDate" : event.newData.expire_date,
      "price" : event.newData.price,
      "name" : event.newData.name
    };
    this.http.put('http://localhost:4321/updateItem', data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  deleteRecord(event){
    console.log(event.data);
    this.http.delete('http://localhost:4321/deleteItem/'+event.data.id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }
}
