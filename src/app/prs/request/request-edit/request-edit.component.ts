import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;
  users: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService,
    private systsvc: SystemService
  ) { }

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request updated.");
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
        console.error(err)
      }
    });
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
