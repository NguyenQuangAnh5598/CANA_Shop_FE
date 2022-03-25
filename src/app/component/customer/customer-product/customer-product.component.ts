import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss']
})
export class CustomerProductComponent implements OnInit {
  @Input()
product: Product | any

  constructor() { }

  ngOnInit(): void {
  }

}
