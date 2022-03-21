import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/Product";
import {ActivatedRoute,Params , Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
productId: number = 0;
// @ts-ignore
  product: Product = {}
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.productId = params['id'];
      this.productService.findById(this.productId).subscribe(product => {
        this.product = product;
      })
    })
  }

  ngOnInit(): void {
  }

  update() {
    this.productService.updateProduct(this.product).subscribe( product => {
      this.router.navigate(['/product-list'])
    });
  }

  // @ts-ignore
  uploadFile(event) {
    this.product.image = event;
  }
}
