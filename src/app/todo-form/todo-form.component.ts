import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

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
    const { newTodo } = this;
    this.todosService.addTodo(newTodo);
    this.newTodo = null;
  }

}
