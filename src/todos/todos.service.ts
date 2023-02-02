import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Todo } from './todo';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  createTodo(title: string): void {
    this.todos.push({
      id: uuid(),
      title: title,
      done: false,
    });
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
