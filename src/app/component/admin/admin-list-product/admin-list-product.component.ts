import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/Product";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrls: ['./admin-list-product.component.scss']
})
export class AdminListProductComponent implements OnInit {
  productList :Product[] = [];

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.findProductList();
  }

  findProductList(): void{
    this.productService.findAll().subscribe(productList=>{
      this.productList = productList;
    });
  }
}
