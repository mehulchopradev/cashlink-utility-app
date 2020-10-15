import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[];

  url: string;

  constructor(private http: HttpClient) {
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
}
