import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private usersvc: UserService,
    private systsvc: SystemService,
    private router: Router
  ) { }

  submit(): void {
    this.message = "";
    this.systsvc.user = null;
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login successful.");
        this.systsvc.user = res;
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.message = "Invalid Username/Password";
        } else {
        console.error("Login unsuccessful.");
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
