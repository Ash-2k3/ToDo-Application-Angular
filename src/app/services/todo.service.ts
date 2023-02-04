import { Injectable } from '@angular/core';
import { of, single } from 'rxjs';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn C++',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '131',
        title: 'Learn C',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '132',
        title: 'Learn Angular',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map(singleTodo => {
      if (singleTodo.id == todo.id) {
        todo.isComplete = !todo.isComplete
      }
    })
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex(
      (currentObj) => currentObj.id == todo.id
    );
    this.todos.splice(indexOfTodo, 1);

  }


}
