import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  UserId: number = 0;
// @ts-ignore
  user: User = {}
  constructor(private userService: UserService,
              private  tokenService: TokenService,
              private route : ActivatedRoute,
              private router: Router) {

  }
  findCurrentUser(){
    this.UserId = this.tokenService.getUserId();
    this.userService.getUserById(this.UserId).subscribe(data=>{
      this.user=data;
    });
  }
  update() {
    this.userService.updateUser(this.user).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }
  ngOnInit(): void {
    this.findCurrentUser();
  }

  // @ts-ignore
  uploadFile(event) {
    this.user.avatar = event;
  }
}
