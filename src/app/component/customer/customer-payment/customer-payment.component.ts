import {Component, OnInit} from '@angular/core';
import {Order} from "../../../model/Order";
import {TokenService} from "../../../service/token.service";
import {OrderService} from "../../../service/order.service";
import {UserService} from "../../../service/user.service";
import {OrderDetail} from "../../../model/OrderDetail";
import {OrderDetailService} from "../../../service/order-detail.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.scss']
})
export class CustomerPaymentComponent implements OnInit {
// @ts-ignore
  order: Order = {};

  userId: number = 0;
  orderId: number | undefined = 0;
  // @ts-ignore
  orderDetailList: OrderDetail[] = [];

  constructor(private orderService: OrderService,
              private tokenService: TokenService,
              private userService: UserService,
              private orderDetailService: OrderDetailService,
              private router: Router
  ) {
    this.userId = this.tokenService.getUserId()
    console.log(this.userId);
    this.userService.findCurrentOrder(this.userId).subscribe(order => {
      this.orderId = order.id
      // @ts-ignore
      this.orderService.findAllByOrder(order.id).subscribe(orderDetailList =>
        this.orderDetailList = orderDetailList)
      console.log(this.orderDetailList)
    });
  }

  ngOnInit(): void {
  }

  update(orderDetail: OrderDetail): void {
    console.log(orderDetail);
this.orderDetailService.updateOrderDetail(orderDetail).subscribe()
    console.log(orderDetail);
    alert('orderDetail quantity changed');
  }

  payment() {
    this.orderService.payment(this.orderId).subscribe(() => {
      alert("Đặt hàng thành công, hãy chờ")
      this.router.navigate(["/customer-order-list"])
    })
  }
}

