import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthLdapService } from './auth-ldap.service';

@Injectable()
export class AuthLdapLoginGuard implements CanActivate {
    constructor(private authLdapService: AuthLdapService) { }
    canActivate(): boolean {
        return this.authLdapService.isLoggedIn();
    }
}