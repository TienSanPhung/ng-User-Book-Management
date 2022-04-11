import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import  {NgModel} from "@angular/forms";

import {
  AuthGuardService as AuthGuard
} from "./services/auth-guard.service";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {AddBooksComponent} from "./components/add-books/add-books.component";

const routes: Routes = [
  {
    path:'',redirectTo:'/dashboard' , pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent , canActivate:[AuthGuard]
  },
  {
    path:'books/:id',component:BookDetailsComponent , canActivate:[AuthGuard]
  },
  {
    path:'add',component:AddBooksComponent , canActivate:[AuthGuard]
  },
  {
    path:'login',component:UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
