import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  showVerifyButton: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request deleted.");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
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
