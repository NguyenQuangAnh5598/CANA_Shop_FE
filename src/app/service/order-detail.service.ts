import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderDetail} from "../model/OrderDetail";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }

createNewOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail> {
  return this.http.post<OrderDetail>(API_LOCAL + 'orderdetail', orderDetail);
}
}
