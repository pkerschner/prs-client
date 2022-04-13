import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  request!: Request;
  showVerifyButton: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  retrieve(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res)
        this.request = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("Request approved.");
        this.retrieve();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyReject(): void {
    this.showVerifyButton = false;
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug("Request rejected.");
        this.retrieve()
      },
      error: err => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.retrieve();
  }

}
