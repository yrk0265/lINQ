import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs';
import {Http} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class WebsocketserviceService {
  socket: any;
  readonly uri: string = "http://localhost:3000/";
  constructor(private _http:Http) {
    this.socket = io(this.uri);
  }
  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on("rest", function (data) {
        subscriber.next(data)
      })
    });
  }
}
