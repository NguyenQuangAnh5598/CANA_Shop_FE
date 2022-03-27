import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/Product";
import {ActivatedRoute, Params} from "@angular/router";
import {OrderDetail} from "../../../model/OrderDetail";
import {Order} from "../../../model/Order";
import {User} from "../../../model/User";
import {OrderDetailService} from "../../../service/order-detail.service";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-customer-product-detail',
  templateUrl: './customer-product-detail.component.html',
  styleUrls: ['./customer-product-detail.component.scss']
})
export class CustomerProductDetailComponent implements OnInit {
  // @ts-ignore
  orderDetail: OrderDetail = {
  }

  productId: number = 2;
  orderQuantity: number = 1;
// @ts-ignore
  product: Product = {}

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private orderDetailService: OrderDetailService) {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.productId = params['id'];
      productService.findById(this.productId).subscribe(data =>
      this.product = data)
      })
  }
  ngOnInit(): void {
  }

   createOrderDetail() {
    // @ts-ignore
    this.orderDetail = {
      orderQuantity: this.orderQuantity,
      productId: this.productId,
    }
    console.log(this.orderDetail)
    this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe();
    alert("Thêm vào rỏ hàng thành công")
  }
}
