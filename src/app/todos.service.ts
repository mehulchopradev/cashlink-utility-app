import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Todo } from './todo';
import { Observable, of, forkJoin } from 'rxjs';
import { AlertMessageService } from './alert-message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string;

  todos: Todo[];

  httpOptions: object;

  constructor(private http: HttpClient, private alertService: AlertMessageService, private snackBar: MatSnackBar) {
    this.todos = [];
    this.url = 'http://localhost:3000/todos';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  fetchTodos() {
    this.alertService.clearMessage(); // wipe off the initial error message

    this.http.get<Todo[]>(`${this.url}?done=false`)
      .pipe(
        catchError((err: any): Observable<Todo[]> => {
          console.log('Error in retrieving the todos');
          console.log(err);
          this.alertService.showError('Error in retrieving the todos'); // to show the error message
          return of([]); // fallback value
        })
      )
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }

  addTodo(newTodo: string): Observable<Todo> {
    this.alertService.clearMessage();

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
          // this.alertService.showSuccess('Todo saved successfully');
          this.snackBar.open('Todo Saved Successfully', '', {
            duration: 5000,
          });
        }),
        catchError((err: any): Observable<any> => {
          // will be called when the previous call is a failure
          this.alertService.showError('Error in saving the todo');
          console.log('Error in saving the todo');
          console.log(err);
          return of({}); // fallback value
        }),
      );
  }

  markDoneTodosCompleted() {
    // from the todos filter out only the todos where done = true
    const doneTodos = this.todos.filter(todo => todo.done);

    // Using http make a put call for each of the above filtered todos
    const putCalls = doneTodos.map(doneTodo => this.http.put<Todo>(`${this.url}/${doneTodo.id}`, {
      id: doneTodo.id,
      title: doneTodo.title,
      done: doneTodo.done,
      createdDate: doneTodo.createdDate
    }, this.httpOptions));

    forkJoin(putCalls).subscribe((results) => {
      this.todos = this.todos.filter(todo => !todo.done);
      this.alertService.showSuccess('Todos marked completed!');
    });
  }
}
