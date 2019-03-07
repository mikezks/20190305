import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;

  constructor() { }

  login() {
    this.username = 'Max';
  }

  logout() {
    this.username = null;
  }
}
