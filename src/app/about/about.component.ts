import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLdapService } from '../services/auth/auth-ldap.service';

import { LdapUser } from '../services/auth/ldap-user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public authLdapService: AuthLdapService, private router: Router, private user: LdapUser) {
  }

  ngOnInit() {
    if (!this.authLdapService.isLoggedIn()) {
      this.authLdapService.logout();
      this.router.navigate(['/login']);
    } else {
      this.user = this.authLdapService.getUser();
    }
  }
}
