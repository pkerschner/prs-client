import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';
import { Request } from './request/request.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user: any = null;
  requests!: Request[];

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

  addUsername(requests: Request[]) {
    for(let r of requests) {
      r.username = r.username;
    }
  }

}
