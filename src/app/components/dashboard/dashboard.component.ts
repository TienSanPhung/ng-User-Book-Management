import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/books";
import {BooksService} from "../../services/books.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class DashboardComponent implements OnInit {

  BookList: Book[] = [];
  Delete: any;


    constructor(private authenService: AuthenticationService,
                private BookService:BooksService,
                private router:Router) {
    }
    ngOnInit():void {
     this.getAllBooks();
    }
    getAllBooks(){
      return this.BookService.getAllBooks().subscribe(
        data =>{
          this.BookList = data;

        }
      )
    }
    logout(){
      this.authenService.logout();
      this.router.navigate(['/login'])
    }


    updateBooks(book:Book){

    }
    deleteBook(id : number){
      this.BookService.delete(id).subscribe(
        response =>{
          console.log(response);

        },
        error => {
          console.log(error);
        }
      );
      this.router.navigate(["/dashboard"]);

    }

}
