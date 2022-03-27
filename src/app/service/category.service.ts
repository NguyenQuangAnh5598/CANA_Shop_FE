import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";
import {environment} from "../../environments/environment.prod";

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category> {
    return this.http.get(API_LOCAL + 'categories')
  }
}
