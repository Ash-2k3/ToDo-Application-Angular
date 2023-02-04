import { Component } from '@angular/core';
import { Todo } from "./../../model/todo";

import { v4 as uuidv4 } from 'uuid';
import { TodoService } from "./../../services/todo.service"

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoTitle: string = "";
  constructor(private todoService: TodoService) {

  }
  handleAdd() {
    const newTodo: Todo = {
      id: uuidv4(),
      isComplete: false,
      title: this.todoTitle,
      date: new Date(),
      
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle="";
  }

}
