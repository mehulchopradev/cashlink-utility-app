import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../book';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {

  book: Book

  constructor(private dialogRef: MatDialogRef<AddBookDialogComponent>) {
    this.book = new Book(null, null, null, null, null, null)
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
