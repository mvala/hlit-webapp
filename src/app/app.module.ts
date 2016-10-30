import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Gravatar } from 'ng2-gravatar-directive';

import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';
import { AuthLdapService } from './services/auth/auth-ldap.service';
import { AuthLdapLoginGuard } from './services/auth/auth-ldap-login.guard';
import { LdapUser } from './services/auth/ldap-user';

import { SocketIOService } from './services/socket.io/socket.io.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthLdapLoginGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    Gravatar
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS,
    JwtHelper,
    SocketIOService,
    AuthLdapService,
    AuthLdapLoginGuard,
    LdapUser,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
