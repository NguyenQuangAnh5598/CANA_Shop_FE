import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showAllProduct();
  }

  private showAllProduct(): void {
    this.productService.findAll().subscribe( productList => {
      this.productList = productList;
    });
  }
}
