import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent implements OnInit {
  productList: Product[] = [];

  pageNum: string = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.showAllProduct();
    this.showAllProductByPage(this.pageNum);
  }

   showAllProduct(): void {
    this.productService.findAll().subscribe( productList => {
      this.productList = productList;
    });
  }

  showAllProductByPage(pageNum: string): void {
    this.productService.showAllProductByPage(pageNum).subscribe( productList => {
      this.productList = productList.content
    })
  }
}
