import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/User";
import {Order} from "../model/Order";

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(API_LOCAL + 'user/' + id);
  }

  findCurrentOrder(id: number): Observable<Order> {
    return this.http.get<Order>(API_LOCAL + 'user/findCurrentOrder/' + id);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(API_LOCAL + 'user');
  }
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(API_LOCAL+'user',user);
  }
}
