import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'getTasks Success!';
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return `getTaskById Success! Parameter [id:${id}]`;
  }

  @Post()
  createTask(@Body() task: TaskPropertyDto) {
    return `createTask Success! Parameter [title:${task.title}, description:${task.description}]`;
  }

  @Patch('/:id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
    return `updateTask Success! Parameter [id:${id}, status:${status}]`;
  }
}
