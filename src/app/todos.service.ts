import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { AlertMessageService } from './alert-message.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string;

  todos: Todo[];

  httpOptions: object;

  constructor(private http: HttpClient, private alertService: AlertMessageService) {
    this.todos = [];
    this.url = 'http://localhost:3000/todos';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  fetchTodos() {
    this.alertService.message = null; // wipe off the initial error message

    this.http.get<Todo[]>(`${this.url}?done=false`)
      .pipe(
        catchError((err: any): Observable<Todo[]> => {
          console.log('Error in retrieving the todos');
          console.log(err);
          this.alertService.message = {}; // to show the error message
          return of([]); // fallback value
        })
      )
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }

  addTodo(newTodo: string): Observable<Todo> {
    const todo: Todo = new Todo(newTodo, false);
    return this.http.post<Todo>(this.url, {
      title: todo.title,
      done: todo.done,
      createdDate: todo.createdDate,
    }, this.httpOptions)
      .pipe(
        tap((todo: Todo) => {
          // side effect code
          // will be called when the previous call is a success
          this.todos.push(todo);
        }),
        catchError((err: any): Observable<any> => {
          // will be called when the previous call is a failure
          console.log('Error in saving the todo');
          console.log(err);
          return of({}); // fallback value
        }),
      );
  }
}
