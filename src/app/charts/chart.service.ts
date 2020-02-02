import {Injectable} from '@angular/core';
import {ICharts} from '../interfaces/charts.interface'
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { retry, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Charts } from '../models/charts.model';
@Injectable()
export class ChartsService {
    socket: any;
    readonly uri: string = "http://localhost:3100/";
    constructor(public httpClient:HttpClient){
        this.socket = io(this.uri);
    }
    // listen(eventName: string) {
    //     return new Observable((subscriber) => {
    //       this.socket.on("get", function (data) {
    //         subscriber.next(data)
    //       })
    //     });
    // }
    update(eventName: string) {
      return new Observable((subscriber) => {
        this.socket.on("update", function (data) {
          subscriber.next(data)
        })
      });
    }
    getCharts():Observable<ICharts[]> {
        return <Observable<ICharts[]>>this.httpClient.get("http://localhost:3100/Charts");
    }
    updateCharts(id: any, charts:Charts): Observable<void> {
      return this.httpClient.put<void>("http://localhost:3100/Charts/"+ id, charts,{
        headers:new HttpHeaders({
          'Content-Type':'application/json'          
          // 'Access-Control-Allow-Origin': 'http://localhost:4200',
          // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        })
      }).pipe(catchError(this.handleError));
    }
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}