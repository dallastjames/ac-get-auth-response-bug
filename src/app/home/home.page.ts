import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public auth: AuthService) {}

  public async cognito(): Promise<void> {
    const isAuthenticated = await this.auth.isAuthenticated();
    if (isAuthenticated) {
      this.logout();
    } else {
      this.login();
    }
  }

  public async login(): Promise<void> {
    await this.auth.login();
    const res = await this.auth.getAuthResponse();
    console.log('AUTH RESPONSE', typeof res, res);
  }

  public async logout(): Promise<void> {
    await this.auth.logout();
  }
}
