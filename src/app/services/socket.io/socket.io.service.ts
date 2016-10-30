import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable()
export class SocketIOService {

  // private url: string = window.location.protocol + '//' +
  // window.location.hostname + ':' + window.location.port;
  private url: string = environment.API_URL;
  private socket;

  constructor() {
    this.socket = io(this.url, { path: '/api/socket.io' });
  }

  getAppInfo() {
    let observable = new Observable(observer => {
      this.socket.on('app.info', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
