import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { LdapUser } from './ldap-user';

@Injectable()
export class AuthLdapService {

  constructor(public http: Http, private jwtHelper: JwtHelper, private user: LdapUser) {
    if (!tokenNotExpired()) this.logout();
  }

  login(username: string, password: string): Observable<boolean> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API_URL+'/login', JSON.stringify({ "username": username, "password": password }), { headers: headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let id_token = response.json() && response.json().id_token;
        if (id_token) {
          localStorage.setItem('id_token', id_token);
          this.setUser();
          // console.log(this.user);
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          this.logout();
          return false;
        }
      });
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }

  logout() {
    this.user.clear();
    localStorage.removeItem('id_token');
  }

  getUser(): any {
    if (!this.isLoggedIn()) return null;
    if ((typeof this.user.dn === 'undefined') || (this.user.dn === '')) this.setUser();
    return this.user;
  }

  setUser() {
    this.user.setUser(JSON.parse(JSON.stringify(this.jwtHelper.decodeToken(localStorage.getItem('id_token')))));
    this.user.setTokenExpiration(this.getTokenExpiration());
  }

  getTokenExpiration(): any {
    return this.jwtHelper.getTokenExpirationDate(localStorage.getItem('id_token'));
  }

}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthLdapService, useClass: AuthLdapService }
];
