import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder) {
    /* this.group = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        state: new FormControl(''),
        zipCode: new FormControl(''),
      }),
    }); */
    // imagine we get the hobbies from the server
    const hobbiesData = [
      'Sports',
      'Shopping',
      'Travel',
      'Entertainment'
    ];

    this.group = this.builder.group({
      username: [''],
      password: [''],
      address: this.builder.group({
        country: [''],
        state: [''],
        zipCode: [''],
      }),
      hobbies: this.builder.array(hobbiesData.map(hobby => this.builder.control('')))
    });
  }

  ngOnInit(): void {
  }

  get hobbies() {
    return this.group.get('hobbies') as FormArray;
  }

  onSave(): void {
    const { value } = this.group;
    debugger;
  }

}
