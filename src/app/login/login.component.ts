import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLdapService } from '../services/auth/auth-ldap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  error = '';

  constructor(public authLdapService: AuthLdapService, private router: Router) {
  }

  ngOnInit() {
    // reset login status
    this.logout();
  }

  login(username: string, password: string) {
    this.loading = true;
    this.error = '';
    this.authLdapService.login(username, password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.loading = false;
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
          console.log(this.error);
        }
      });
  }

  logout() {
    this.authLdapService.logout();
  }

  isLoggedIn(): boolean {
    return this.authLdapService.isLoggedIn();
  }
}
