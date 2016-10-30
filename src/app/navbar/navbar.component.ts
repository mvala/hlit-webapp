import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthLdapService } from '../services/auth/auth-ldap.service';
import { SocketIOService } from '../services/socket.io/socket.io.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connection: any;
  api_info: any;

  constructor(public authLdapService: AuthLdapService, private socketIOService: SocketIOService) {
    this.api_info = { version: 'n/a', user_count: 0, realm:'n/a' };
  }
  ngOnInit() {
    this.connection = this.socketIOService.getAppInfo().subscribe(data => {
      this.api_info = data;
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
