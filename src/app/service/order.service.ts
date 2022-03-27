import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {OrderDetail} from "../model/OrderDetail";
import {Order} from "../model/Order";


const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
  ) { }

  findAllByOrder(id: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(API_LOCAL + 'orderdetail/findAllByOrder/' + id);
  }

  payment(id: number | undefined): Observable<Order> {
    return this.http.put<Order>(API_LOCAL + 'order/payment/'+ id, id);
  }

  checkOrder(id: number | undefined): Observable<any> {
    // @ts-ignore
    return this.http.put<any>(API_LOCAL + 'order/acceptOrder/'+ id)
  }

  findAllOrderByStatusId(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(API_LOCAL + 'order/findAllOrderByStatusId/' + id);
  }
}
