import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[];

  url: string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.books = [];
    this.url = 'http://localhost:3000/books';
  }

  fetchBooks() {
    this.http.get<Book[]>(this.url)
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  fetchBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  addBook(book: Book) {
    this.http.post<Book>(this.url, {
      title: book.title,
      pages: book.pages,
      price: book.price
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).subscribe(book => {
      this.books.push(book);
      this.snackBar.open('Book Added successfully', '', {
        duration: 3000,
      });
    });
  }
}
