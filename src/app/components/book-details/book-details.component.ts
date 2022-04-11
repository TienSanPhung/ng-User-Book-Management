import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/books";
import {BooksService} from "../../services/books.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgModel} from "@angular/forms";
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class BookDetailsComponent implements OnInit {
  currentBook = {
    bookId: -1,
    name: "" ,
    category: "",
    description: "",
    author: "",
    publisher:""
  };

  message = '';
  bookDialog = true;

  constructor( private BookService: BooksService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.params['id']);
  }
  getBook(id: string): void {
    this.BookService.get(id)
      .subscribe(
        data => {
          this.currentBook = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  goBack() {
    this.router.navigate(['/dashboard']);

  }

}
