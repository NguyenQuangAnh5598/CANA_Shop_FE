import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../../../model/User";
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.scss']
})
export class AdminUpdateUserComponent implements OnInit {
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

  ngOnInit(): void {

  }

  update(){
    this.userService.updateUser(this.user).subscribe(data=>{
      this.router.navigate(['/admin-list-user']);
    })
  }

  // @ts-ignore
  uploadFile(event) {
    this.user.avatar = event;
  }
}
