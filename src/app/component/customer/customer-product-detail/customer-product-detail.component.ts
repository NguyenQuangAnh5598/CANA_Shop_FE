import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/Product";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-customer-product-detail',
  templateUrl: './customer-product-detail.component.html',
  styleUrls: ['./customer-product-detail.component.scss']
})
export class CustomerProductDetailComponent implements OnInit {
// @ts-ignore
  product: Product = {}
  productId: number = 6;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      // this.productId = params['id'];
      this.productService.findById(this.productId).subscribe(product => {
        this.product = product;
      })
    })
  }
  ngOnInit(): void {
  }

}
