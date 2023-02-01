import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TodosService } from './todos/todos.service';
import { TestController } from './test/test.controller';
import { WuffController } from './test/wuff/wuff.controller';
import { MoohController } from './test/wuff/mooh.controller';

@Module({
  imports: [TodosModule],
  controllers: [AppController, TestController, WuffController, MoohController],
  providers: [AppService, TodosService],
})
export class AppModule {}
