import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient) {
    /* this.group = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        state: new FormControl(''),
        zipCode: new FormControl(''),
      }),
    }); */

    this.group = this.builder.group({
      username: ['', [Validators.required, Validators.email], this.usernameExistsValidator.bind(this)],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      address: this.builder.group({
        country: [''],
        state: [''],
        zipCode: [''],
      }),
      contacts: this.builder.array([])
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.group.get('username');
  }

  get password() {
    return this.group.get('password');
  }

  get contacts(): FormArray {
    return this.group.get('contacts') as FormArray;
  }

  onAddContact(): void {
    this.contacts.push(this.builder.control(''));
  }

  onDeleteContact(index: number): void {
    this.contacts.removeAt(index);
  }

  onSave(): void {
    const { value } = this.group;
    debugger;
  }

  // synchronous custom validator
  /* usernameExistsValidator(control: AbstractControl): {[key: string]: any} | null {
    // custom validation code

    // sync validator code
    const existingUsernames = ['mehul@gmail.com', 'rock@gmail.com', 'admin@gmail.com'];
    const username = control.value;
    if (username && username.length && existingUsernames.includes(username)) {
      return {
        usernameExists: true,
      }
    }

    return null; // no validation error
  } */

  // asynchronous custom validator
  usernameExistsValidator(control: AbstractControl): Observable<any|null> {
    const { value } = control;
    return this.http.get<any[]>(`http://localhost:3000/users?username=${value}`)
      .pipe(
        map(users => {
          if (users.length) {
            return {
              usernameExists: true,
            }
          }

          return null;
        })
      );
  }

}
