import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';

const routes: Routes = [
  { path: 'lib', component: LibraryComponent, children: [
    { path: 'books', component: BooksComponent },
    { path: 'book-details/:bookId', component: BookDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryNewRoutingModule { }
