import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  id: number = 0;
// @ts-ignore
  user: User = {}
  constructor(private userService: UserService, private route : ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
      this.userService.getUserById(this.id).subscribe(user => {
        this.user = user;
      })
    })
  }
  update() {
    this.userService.updateUser(this.user).subscribe(data => {
      this.router.navigate(['/admin-list-user']);
    })
  }
  ngOnInit(): void {
  }

  // @ts-ignore
  uploadFile(event) {
    this.user.avatar = event;
  }
}
