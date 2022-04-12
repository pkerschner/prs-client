import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests!: Request[];
  searchCriteria: string = "";

  constructor(
    private systsvc: SystemService,
    private reqsvc: RequestService
  ) { }

  addUsername(requests: Request[]) {
    for(let r of requests) {
      r.username = r.username;
    }
  }

  ngOnInit(): void {
    this.systsvc.checkLogin();
    let userId = this.systsvc.getUserLoggedIn()!.id;
    this.reqsvc.reviews(userId).subscribe({
      next: (res) => {
        this.addUsername(res);
        console.debug(res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
