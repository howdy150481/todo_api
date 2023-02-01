import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  create(@Body() body): any[] {
    this.todosService.createTodo(body.title);
    return this.todosService.getAllTodos();
  }

  @Get()
  list(): any[] {
    return this.todosService.getAllTodos();
  }
}
