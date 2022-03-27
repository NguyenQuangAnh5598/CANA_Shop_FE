import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ActivatedRoute} from "@angular/router";
import {OrderDetailService} from "../../../service/order-detail.service";
import {OrderDetail} from "../../../model/OrderDetail";

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss']
})
export class CustomerProductComponent implements OnInit {
  // @ts-ignore
  orderDetail: OrderDetail = {
  }
  orderQuantity: number = 1;
  @Input()
product: Product | any

  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
  }

  createOrderDetail(productId: number) {
    // @ts-ignore
    this.orderDetail = {
      orderQuantity: this.orderQuantity,
      productId: productId,
    }
    console.log(this.orderDetail)
    this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe();
    alert("Thêm vào rỏ hàng thành công")
  }
}
