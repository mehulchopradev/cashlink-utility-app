import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // todos: Todo[];

  // isVisible: boolean;

  constructor(public todosService: TodosService) {
    /* this.todos = [
      new Todo('learng gaming', true),
      new Todo('practice programming', false),
      new Todo('Go out for a movie', true)
    ]; */

    // const todo = this.todos[0];
    // console.log(todo.title); // get the title property

    // todo.title = 'null'; // set the title property

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

    // this.isVisible = true;
  }

  // markedForCompletionCount -> 5; if 5 todos are marked for completion
  // markedForCompletionCount -> 0; if 0 todos are marked for completion
  // markedForCompletionCount is a dynamic property being computed on the basis of the done property in every Todo in todos list
  get markedForCompletionCount() {
    return this.todosService.todos.filter(todo => todo.done).length;
  }

  // isDisabled -> true; if there is no todo in todolist or no todo is checked in the todolist
  // isDisabled -> false; if there are todos and there is atleast one todo that is checked in the todolist
  // isDisabled is a dynamic property being computed on the basis of the done property in every Todo in todos list
  get isDisabled() {
    // console.log('Get isDisabled called');
    return this.todosService.todos.filter(todo => todo.done).length == 0;
  }

  onFinish() {
    this.todosService.todos = this.todosService.todos.filter(todo => !todo.done);
    // this.todos = this.todos.filter(todo => !todo.done);
    // this.isVisible = this.todos.length > 0;
  }

  ngOnInit(): void {
  }

}
