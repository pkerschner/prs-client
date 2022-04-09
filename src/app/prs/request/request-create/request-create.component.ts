import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private usersvc: UserService,
    private systsvc: SystemService
  ) { }

  save(): void {
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request added.");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
