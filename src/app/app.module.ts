import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AddBookDialogComponent } from './add-book-dialog/add-book-dialog.component';
import { RegisterComponent } from './register/register.component';
import { PunishmentComponent } from './punishment/punishment.component';
import { RepeaterDirective } from './repeater.directive';

// feature module
/* import { CalculatorNewModule } from './calculator-new/calculator-new.module';
import { CalculatorNewRoutingModule } from './calculator-new/calculator-new-routing.module'; */
/* import { LibraryNewModule } from './library-new/library-new.module';
import { LibraryNewRoutingModule } from './library-new/library-new-routing.module'; */

// shareable module
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';

@NgModule({
  declarations: [
    AppComponent,
    CalcResultsComponent,
    CalcFormComponent,
    CalculatorComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    CapitalizePipe,
    AlertMessageComponent,
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent,
    AddBookDialogComponent,
    RegisterComponent,
    PunishmentComponent,
    RepeaterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    CommonUtilitiesModule,
    // CalculatorNewModule,
    // CalculatorNewRoutingModule,
    // LibraryNewModule,
    // LibraryNewRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
