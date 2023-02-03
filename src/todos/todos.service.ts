import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  list(): Promise<any[]> {
    return this.prisma.todos.findMany();
  }

  async create(title: string): Promise<any[]> {
    await this.prisma.todos.create({
      data: {
        title: title,
      },
    });
    return this.prisma.todos.findMany();
  }

  async update(body: any): Promise<void> {
    const todosCount = await this.prisma.todos.count({
      where: { id: Number(body.id) },
    });

    if (todosCount > 0) {
      await this.prisma.todos.update({
        where: {
          id: Number(body.id),
        },
        data: {
          title: body.title,
          done: !body.done,
        },
      });
    }
  }

  async delete(id: number): Promise<any[]> {
    const todosCount = await this.prisma.todos.count({ where: { id: id } });
    if (todosCount > 0) {
      await this.prisma.todos.delete({ where: { id: id } });
    }
    return this.prisma.todos.findMany();
  }
}
