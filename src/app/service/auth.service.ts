import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignupForm} from "../model/SignupForm";
import {Observable} from "rxjs";
import {LoginForm} from "../model/LoginForm";
import {JwtResponse} from "../model/JwtResponse";

const API_LOCAL = `${environment.API_LOCAL}`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signUpForm: SignupForm): Observable<SignupForm>{
    return this.http.post<SignupForm>(API_LOCAL + 'signup', signUpForm);
  }

  login(login: LoginForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(API_LOCAL+ 'login', login);
  }
}
