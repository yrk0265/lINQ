import { Component,OnInit } from '@angular/core';
import { WebsocketserviceService } from './websocketservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socketio';
  constructor(){
    
  }
  // constructor(private webSocketService: WebsocketserviceService) {

  // }
  ngOnInit() {
    //here we want to listen to an event from the socket.io server
    // this.webSocketService.listen('test').subscribe((data) => {
    //   console.log(data);
    // })
  }
}
