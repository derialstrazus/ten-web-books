import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ten-web-books-frontend';

  books: Book[] = BOOKS;

  selectedBook?: Book;

  ngOnInit(): void {    
    for (let index = 0; index < this.books.length; index++) {
      const book: Book = this.books[index];
      book.cover = "assets/cover_" + book.id + ".jpg";
    }
  }

  showBookDetails(book: Book): void {
    this.selectedBook = book;
  }
}
