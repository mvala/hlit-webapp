/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketIOService } from './socket.io.service';

describe('Service: ServerInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIOService]
    });
  });

  it('should ...', inject([SocketIOService], (service: SocketIOService) => {
    expect(service).toBeTruthy();
  }));
});
