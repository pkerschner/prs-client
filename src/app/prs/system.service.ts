import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user: any = null;

  constructor(
    private router: Router
  ) { }

  getUserLoggedIn(): User | null {
    return this.user;
  }

  get loggedIn() {
    return this.user != null;
  }

  checkLogin(): void {
    if(!this.loggedIn) {
      this.router.navigateByUrl("/login");
    }
  }

}
