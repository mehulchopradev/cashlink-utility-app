import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(public booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.fetchBooks();
  }

}
