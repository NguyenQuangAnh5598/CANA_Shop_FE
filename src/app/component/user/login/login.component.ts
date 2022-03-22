import {Component, OnInit} from '@angular/core';
import {Form} from "@angular/forms";
import {LoginForm} from "../../../model/LoginForm";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  // @ts-ignore
  loginForm: LoginForm = {};
  subscription: Subscription | undefined;

  constructor(private router: Router,
              private authService: AuthService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.loginForm = new LoginForm(
      this.form.userName,
      this.form.password
    )
    console.log(this.loginForm)
    this.subscription = this.authService.login(this.loginForm).subscribe(data => {
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRole(data.roles);
        this.tokenService.setAvatar(data.avatar)
        this.tokenService.setUserId(data.id)
        console.log(data.roles)
        if (data.roles[0] == "admin") {
          this.router.navigate(["/home-admin"]).then(() => {
            window.location.reload();
          })
        } else {
          this.router.navigate(["/home"]).then(() => {
            window.location.reload();
          })
        }
      } else {
        alert( "Your account has been error")
      }
    })
  }
}
