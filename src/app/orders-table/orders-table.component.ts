import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ServerDataSource} from 'ng2-smart-table';
import {Http} from '@angular/http';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent {
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
      date: {
        title: 'Date'
      },
      wasThere: {
        title: 'Completed'
      },
      amount: {
        title: 'Amount',
      },
      totalPrice: {
        title: 'Total Price',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: Http) {
    this.http = http;
    this.source = new ServerDataSource(http, {endPoint: 'http://localhost:4321/getAllDataFromOrders'});
  }

  onConfirmCreate(event) {
    const data = {
      'id': event.newData.id,
      'was_there': event.newData.wasThere,
      'date': event.newData.date,
      'amount': event.newData.amount,
      'price': event.newData.totalPrice
    };
    this.http.post('http://localhost:4321/addNewOrder', data).subscribe(
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
      'was_there': event.newData.wasThere,
      'date': event.newData.date,
      'amount': event.newData.amount,
      'price': event.newData.totalPrice
    };
    this.http.put('http://localhost:4321/updateOrder', data).subscribe(
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
      this.http.delete('http://localhost:4321/deleteOrder/' + event.data.id).subscribe(
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
