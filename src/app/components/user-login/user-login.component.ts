import { Component, OnInit } from '@angular/core';

import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {AuthService} from "../../services/auth.service";
import {first} from "rxjs";
import {NgModule} from "@angular/core";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  account: User = {
    Email:"",
    Password:""
  }

  constructor(
    private  route: ActivatedRoute,
    private  router: Router,
    private  authenService: AuthenticationService,
    private  authService: AuthService) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate([""]);
    }
  }
  login(){
    this.authenService.login(this.account.Email,this.account.Password)
      .pipe(first())
      .subscribe(
        data =>{
          this.router.navigate([""]);
        },
      error => {
          console.log(error);
      },

    )
  }

}
