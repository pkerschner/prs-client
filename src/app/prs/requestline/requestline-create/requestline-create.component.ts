import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();

  constructor(
    private reqlnsvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.reqlnsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added.");
        this.router.navigateByUrl("/requestline/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params["requestId"];
  }

}
