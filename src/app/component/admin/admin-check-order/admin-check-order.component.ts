import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {Order} from "../../../model/Order";

@Component({
  selector: 'app-admin-check-order',
  templateUrl: './admin-check-order.component.html',
  styleUrls: ['./admin-check-order.component.scss']
})
export class AdminCheckOrderComponent implements OnInit {
orderList: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  this.getAllOrderByStatusId()
  }

getAllOrderByStatusId() {
  this.orderService.findAllOrderByStatusId(2).subscribe(data => {
    this.orderList = data;
    console.log(data)

  } )
}

acceptOrder(id: any, index: any){
    console.log(id)
    this.orderService.checkOrder(id).subscribe(() => {
    alert("Đã xác nhận đơn hàng thành công");
      this.orderList.splice(index,1)
      console.log(this.orderList)

    })

  }
}
