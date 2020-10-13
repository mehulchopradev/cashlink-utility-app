import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTodo: string;

  // Dependency injection
  // IOC (Inversion of control)
  constructor(private todosService: TodosService) {
    this.newTodo = null;
  }

  ngOnInit(): void {
  }

  onSave() {
    const { newTodo } = this; // sync code
    this.todosService.addTodo(newTodo)
      .subscribe((todo: Todo) => {
        if (todo.id) {
          // there was success in saving the todo
          this.newTodo = null; // sync code (clears out the text field)
          // this.todosService.todos.push(todo); // not ideal. Shud be the job of todos service to push it in the todos array
        }
      }); // async code
  }
}
