import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  get(): any[] {
    return this.todosService.getAllTodos();
  }

  @Post()
  post(@Body() body): void {
    this.todosService.createTodo(body.title);
  }
}
