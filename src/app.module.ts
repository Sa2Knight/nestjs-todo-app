import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'nest_todo',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
    }),
    TasksModule,
  ],
})
export class AppModule {}
