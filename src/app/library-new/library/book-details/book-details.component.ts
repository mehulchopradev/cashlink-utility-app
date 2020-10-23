import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BooksService) {
    this.book = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bookId = params.bookId;
      this.bookService.fetchBook(bookId)
        .subscribe((book: Book) => {
          // lets fake a server time delay in the response
          setTimeout(() => {
            this.book = book;
          }, 10000)
        });
    });
  }

}
