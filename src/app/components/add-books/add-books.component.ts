import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/books";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {ConfirmationService, MessageService} from "primeng/api";

class UserInfoService {
}

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class AddBooksComponent implements OnInit {

  Books: Book = {
    bookId: 0,
    name: "",
    category: "",
    description: "",
    author: "",
    publisher: ""
  };
  submitted = false;
  bookDialog = true;

  constructor(
    private BookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  saveBooks(): void {
    const data = {
      Name: this.Books.name,
      Category: this.Books.category,
      Description: this.Books.description,
      Author: this.Books.author,
      Publisher: this.Books.publisher
    };
    this.BookService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

  }
  newBook(): void {
    this.submitted = false;
    this.Books = {
      bookId:0,
      name: "" ,
      category: "",
      description: "",
      author: "",
      publisher: "",
    };
  }

  goBack() {
    this.router.navigate(['/dashboard']);

  }
}
