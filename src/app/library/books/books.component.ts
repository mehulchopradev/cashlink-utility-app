import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../../add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(public booksService: BooksService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.booksService.fetchBooks();
  }

  onAddBook(): void {
    const dialogRef: MatDialogRef<AddBookDialogComponent> = this.dialog.open(AddBookDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(book => {
      book.price = parseInt(book.price);
      book.pages = parseInt(book.pages);

      this.booksService.addBook(book);
    })
  }
}
