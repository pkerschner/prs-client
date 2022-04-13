import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  products!: Product[];

  constructor(
    private reqlnsvc: RequestlineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.reqlnsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added.");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params["requestId"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
