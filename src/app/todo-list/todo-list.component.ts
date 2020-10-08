import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  isVisible: boolean;

  constructor() {
    this.todos = [
      new Todo('learng gaming', true),
      new Todo('practice programming', false),
      new Todo('Go out for a movie', true)
    ];
    /* this.todos = [
      {
        title: 'learn gaming',
        done: true,
        createdDate: new Date(),
      },
      {
        title: 'practice programming',
        done: false,
        createdDate: new Date(),
      },
      {
        title: 'Go out for a movie',
        done: true,
        createdDate: new Date(),
      },
    ]; */

    this.isVisible = true;
  }

  onFinish() {
    this.todos = this.todos.filter(todo => !todo.done);
    this.isVisible = this.todos.length > 0;
  }

  ngOnInit(): void {
  }

}
