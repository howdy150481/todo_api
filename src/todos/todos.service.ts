import { Injectable } from '@nestjs/common';
import { Todo } from './todo';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  createTodo(title: string): void {
    this.todos.push({
      title: title,
      done: false,
    });
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
