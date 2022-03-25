import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent implements OnInit {
  @Input()
  productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.showAllProduct();
  }

  // private showAllProduct(): void {
  //   this.productService.findAll().subscribe( productList => {
  //     this.productList = productList;
  //   });
  // }
}
