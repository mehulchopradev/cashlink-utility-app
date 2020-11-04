import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { BooksComponent } from './library/books/books.component';
import { LibraryNewRoutingModule } from './library-new-routing.module';

import { CommonUtilitiesModule } from '../common-utilities/common-utilities.module';



@NgModule({
  declarations: [LibraryComponent, BookDetailsComponent, BooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    RouterModule,
    LibraryNewRoutingModule,
    CommonUtilitiesModule,
  ]
})
export class LibraryNewModule { }
