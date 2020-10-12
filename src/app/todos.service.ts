import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string;

  todos: Todo[];

  httpOptions: object;

  constructor(private http: HttpClient) {
    this.todos = [];
    this.url = 'http://localhost:3000/todos';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  fetchTodos() {
    this.http.get<Todo[]>(`${this.url}?done=false`)
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }

  addTodo(newTodo: string) {
    const todo: Todo = new Todo(newTodo, false);
    this.http.post<Todo>(this.url, {
      title: todo.title,
      done: todo.done,
      createdDate: todo.createdDate,
    }, this.httpOptions)
      .subscribe((todo: Todo) => {
        this.todos.push(todo);
      });
  }
}
