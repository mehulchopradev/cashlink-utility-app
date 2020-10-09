import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  addTodo(newTodo: string): Todo {
    const todo: Todo = new Todo(newTodo, false);
    this.todos.push(todo);
    return todo;
  }
}
