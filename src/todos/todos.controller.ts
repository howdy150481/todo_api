import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  list(): Promise<any[]> {
    return this.todosService.list();
  }

  @Post()
  async create(@Body() body): Promise<any[]> {
    return await this.todosService.create(body.title);
  }

  @Put()
  update(@Body() body): void {
    this.todosService.update(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<any[]> {
    return await this.todosService.delete(Number(id));
  }
}
