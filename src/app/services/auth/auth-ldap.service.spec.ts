/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthLdapService } from './auth-ldap.service';

describe('Service: AuthLdap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLdapService]
    });
  });

  it('should ...', inject([AuthLdapService], (service: AuthLdapService) => {
    expect(service).toBeTruthy();
  }));
});
