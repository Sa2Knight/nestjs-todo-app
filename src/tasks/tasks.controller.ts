import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'タスク一覧を取得します' })
  @ApiResponse({ status: 200, description: '全てのタスク一覧', type: Task })
  @ApiResponse({ status: 403, description: 'トークンが不正な場合' })
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() task: TaskPropertyDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Patch('/:id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body('status', TaskStatusPipe) status: string): Promise<Task> {
    return this.tasksService.updateTask(id, status);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
