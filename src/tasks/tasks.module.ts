import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]), // 追加
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
