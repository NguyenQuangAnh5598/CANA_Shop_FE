import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import firebase from "firebase/compat";
import { User } from 'src/app/model/User';
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-list-user',
  templateUrl: './admin-list-user.component.html',
  styleUrls: ['./admin-list-user.component.scss']
})
export class AdminListUserComponent implements OnInit {
 userList: User[] = [];
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.findUserList();
  }
  findUserList():void{
    this.userService.findAll().subscribe(userList=>{
      this.userList = userList;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['admin-update-user',id]);
  }
}
