import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";

const API_LOCAL = `${environment.API_LOCAL}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_LOCAL + 'product');
  }

  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_LOCAL + 'product', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(API_LOCAL + 'product', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(API_LOCAL + 'product/' + id);
  }

  deleteProduct(id: number) {
    return this.http.delete(API_LOCAL + 'product/' + id);
  }

  showAllProductByPage(pageNum: string): Observable<any> {
    return this.http.get<any>(API_LOCAL + 'product/page' + pageNum)
  }
}
